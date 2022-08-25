import { AppLogger } from "@mechsoft/app-logger";
import { Bloc, BlocAttach, BlocFieldResolver, BlocValidate, BusinessRequest, PrismaAttach, PrismaHookHandler, PrismaHookRequest } from "@mechsoft/business-rules-manager";
import { TenantContext } from "@mechsoft/common";
import { FirebaseService } from "@mechsoft/firebase-admin";
import { Injectable } from "@nestjs/common";
import { BusinessMode, Location, OrderStatus, Prisma,  } from "@prisma/client";
import * as DataLoader from "dataloader";
import { RedisPubSub } from "graphql-redis-subscriptions";
import { LOCATION_CHANGED_CHANNEL,  PUSH_MESSAGE_CHANNEL } from "src/app-schemas/subscriptions/subscription.service";
import {  Business, LocationCreateInput, User, UserUpdateInput, UserWhereUniqueInput,Notification, NotificationType } from "src/models/graphql";
import { uploadFile } from "src/utils/file.utils";

//import * as uuid from 'uuid';
import {
  isUserSensitiveInfo,
  onlyOwnerhasAccess,
  uniqueEmailPerAccount
} from '../rules.definitions';

@Bloc()
@Injectable()
export class BusinessLogicService {
  constructor(
    private readonly logger: AppLogger,   
    private readonly app: FirebaseService,
    private readonly redisPubSub:RedisPubSub
  ) {
   this.redisPubSub.subscribe(PUSH_MESSAGE_CHANNEL,this.sendNotification.bind(this))
  }
 

  async createAttachments(attachments: { create: string | any[]; },context:TenantContext){
    const uploads=[];
     for(let i=0;i<attachments?.create?.length;i++) {
        const item =attachments.create[i];
        uploads.push(uploadFile((item as any).path));
     }
    const files = (await ( Promise.all(uploads))).map((file)=>{
      return context.prisma.attachment.create({ data: file });
    });
    
    const files2 = await Promise.all(files)
    return files2;
  }

 
  // upload user avator during signup
  /* @BlocAttach('signup.input.credentials.avator')
  async avator(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
    const { args, context } = v;
    const { credentials} = args as {credentials:SignupInput};
    const { avator } = credentials
    const file = await uploadFile(avator)
    const avator2 = await context.prisma.attachment.create({ data: { ...file } })

    if (avator2 && avator2.id) {
      v.args.credentials.avator = { connect: { id: avator2.id } };
    }
    return next(v)
  }
  //Upload Business cover image during signup
  @BlocAttach('signup.input.credentials.business.cover.create.path')
  async businessCover(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
    const { args, context } = v;
    const { credentials} = args as  {credentials:SignupInput};
    const business = credentials.business as BusinessCreateWithoutOwnerInput;
    const file = await uploadFile(business.cover.create.path)
    const businessCover = await context.prisma.attachment.create({ data: { ...file } })

    if (businessCover && businessCover.id) {
      v.args.credentials.business.cover = { connect: { id: businessCover.id } };
    }
    return next(v)
  } */

 
  // Update user avator 
  @BlocAttach('updateOneUser.input.data.avator.create.path')
  async updateAvator(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
    
    const { args, context } = v;
    const { data, ...rest } = args as {data:UserUpdateInput};
    const { avator } = data
  
    const file = await uploadFile(avator.create.path)
    const file2 = await context.prisma.attachment.create({ data: { ...file } })    
    if (file2 && file2.id) {
      v.args.data.avator = { connect: { id: file2.id } };
    }
    return next(v)
  }

//  upload image on reviews during creation via user entry
@BlocAttach('updateOneUser.input.data.reviewed.create.attachments.create.path')
async uploadReviewAttachments(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  
  const { args, context } = v;
  const { data, ...rest } = args as {data:UserUpdateInput};
  const { reviewed } = data 
  const attachmentsTasks = [];
  const reviews = reviewed.create; 
  for(let i=0;i<reviews.length;i++){
    const attachments = reviews[i].attachments.create;
    for(let j=0;j<attachments.length;j++){
      const task = new Promise(async (resolve,reject)=>{
       const attachment = attachments[j].path;
      const file = await uploadFile(attachment)
      const file2 = await context.prisma.attachment.create({ data: { ...file } })
      if (file2 && file2.id) {
        let connect = v.args.data.reviewed.create[i].attachments.connect??[];
        connect[j]={ id: file2.id };
        v.args.data.reviewed.create[i].attachments.connect=connect;
        v.args.data.reviewed.create[i].attachments.create.splice(j,1);
      }
      resolve(file2);
      });
      attachmentsTasks.push(task);
    }
  }

  await Promise.all(attachmentsTasks);
  return next(v)
}

//  upload image on reviews during update via user entry
@BlocAttach('updateOneUser.input.data.reviewed.update.data.attachments.create.path')
async uploadReviewAttachments2(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  const { args, context } = v;
  const { data, ...rest } = args as {data:UserUpdateInput};
  const { reviewed } = data 
  const attachmentsTasks = [];
  const reviews = reviewed.update; 
  for(let i=0;i<reviews.length;i++){
    const attachments = reviews[i].data.attachments.create;
    for(let j=0;j<attachments.length;j++){
      const task = new Promise(async (resolve,reject)=>{
       const attachment = attachments[j].path;
      const file = await uploadFile(attachment)
      const file2 = await context.prisma.attachment.create({ data: { ...file } })
      if (file2 && file2.id) {
        let connect = v.args.data.reviewed.update[i].data.attachments.connect??[];
        connect[j]= { id: file2.id } ;
        v.args.data.reviewed.update[i].data.attachments.connect=connect;
        v.args.data.reviewed.update[i].data.attachments.create.splice(j,1)
      }
      resolve(file2);
      });
      attachmentsTasks.push(task);
    }
  }

  await Promise.all(attachmentsTasks);
  return next(v)
}


//  upload image on comment during creation via user entry
@BlocAttach('updateOneUser.input.data.comments.create.attachments.create.path')
async uploadCommentAttachments(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  const { args, context } = v;
  const { data, ...rest } = args as {data:UserUpdateInput};
  const { comments } = data 
  const attachmentsTasks = [];
  const commentsList = comments.create; 
  for(let i=0;i<commentsList.length;i++){
    const attachments = commentsList[i].attachments.create;
    for(let j=0;j<attachments.length;j++){
      const task = new Promise(async (resolve,reject)=>{
       const attachment = attachments[j].path;
      const file = await uploadFile(attachment)
      const file2 = await context.prisma.attachment.create({ data: { ...file } })
      if (file2 && file2.id) {
        let connect = v.args.data.comments.create[i].attachments.connect??[]
        connect[j]={ id: file2.id };
        v.args.data.comments.create[i].attachments.connect=connect;
        v.args.data.comments.create[i].attachments.create.splice(j,1);
      }
      resolve(file2);
      });
      attachmentsTasks.push(task);
    }
  }
  await Promise.all(attachmentsTasks);
  return next(v)
}

//upload attachment on comment during update via user entry
@BlocAttach('updateOneUser.input.data.comments.update.data.attachments.create.path')
async uploadCommentAttachments2(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  const { args, context } = v;
  const { data} = args as {data:UserUpdateInput};
  const { comments } = data 
  const attachmentsTasks = [];
  const commentsList = comments.update; 
  for(let i=0;i<commentsList.length;i++){
    const attachments = commentsList[i].data.attachments.create;
    for(let j=0;j<attachments.length;j++){
      const task = new Promise(async (resolve,reject)=>{
       const attachment = attachments[j].path;
      const file = await uploadFile(attachment)
      const file2 = await context.prisma.attachment.create({ data: { ...file } })
      if (file2 && file2.id) {
        let connect = v.args.data.comments.update[i].data.attachments.connect??[]
        connect[j]= { id: file2.id } ;
        v.args.data.comments.update[i].data.attachments.connect = connect;
        v.args.data.comments.update[i].data.attachments.create.splice(j,1)
      }
      resolve(file2);
      });
      attachmentsTasks.push(task);
    }
  }
  await Promise.all(attachmentsTasks);
  return next(v)
}

//upload attachment for cover on business during update via user entry
@BlocAttach('updateOneUser.input.data.businessProfile.update.cover.create.path')
async uploadBusinessCoverAttachments(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  const { args, context } = v;
  const { data, ...rest } = args as {data:UserUpdateInput};
  const { businessProfile } = data;
    const attachment = businessProfile.update.cover.create.path;
      const file = await uploadFile(attachment);
      const file2 = await context.prisma.attachment.create({ data: { ...file } });
      if (file2 && file2.id) {
        businessProfile.update.cover.connect={id:file2.id}
       // v.args.data.businessProfile.update.coverId={set:file2.id};
       // delete
         businessProfile.update.cover.create=undefined;
      }
  return next(v)
}
//upload attachment for cover on business during upsert via user entry
@BlocAttach('updateOneUser.input.data.businessProfile.upsert.create.cover.create.path')
async upsertBusinessCoverAttachments(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  const { args, context } = v;
  const { data, ...rest } = args as {data:UserUpdateInput};
  const { businessProfile } = data;
    const attachment = businessProfile.upsert.create.cover.create.path;
      const file = await uploadFile(attachment);
      const file2 = await context.prisma.attachment.create({ data: { ...file } });
      if (file2 && file2.id) {
        businessProfile.upsert.create.cover={connect:{id:file2.id}} 
        businessProfile.upsert.update.cover={connect:{id:file2.id}}       
      
      }
  return next(v)
}
//upload attachment for gallery on business during update via user entry
@BlocAttach('updateOneUser.input.data.businessProfile.update.attachments.create.path')
async uploadGalleryAttachments(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  const { args, context } = v;
  const { data, ...rest } = args as {data:UserUpdateInput};
  const { businessProfile } = data 
    
    const attachmentsTasks = [];  
    const attachments = businessProfile.update.attachments.create;
    for(let j=0;j<attachments.length;j++){
      const task = new Promise(async (resolve,reject)=>{
       const attachment = attachments[j].path;
      const file = await uploadFile(attachment)
      const file2 = await context.prisma.attachment.create({ data: { ...file } })
      if (file2 && file2.id) {
        let connect =v.args.data.businessProfile.update.attachments.connect??[]
        connect[j]= { id: file2.id } ;
        businessProfile.update.attachments.connect=connect;
        businessProfile.update.attachments.create.splice(j,1);
        //v.args.data.businessProfile.update.attachments.connect=connect;
        //v.args.data.businessProfile.update.attachments.create.splice(j,1)
      }
      resolve(file2);
      });
      attachmentsTasks.push(task);
    }
  await Promise.all(attachmentsTasks);
  return next(v)
}

//upload attachment on service during creation via user entry
@BlocAttach('updateOneUser.input.data.businessProfile.update.services.create.image.create.path')
async uploadServicetAttachment(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  const { args, context } = v;
  const { data, } = args as {data:UserUpdateInput};
  const { businessProfile } = data   
  const attachmentsTasks = [];
  const services = businessProfile.update.services.create; 
  for(let i=0;i<services.length;i++){        
      const task = new Promise(async (resolve,reject)=>{
       const attachment = services[i].image.create.path;
      const file = await uploadFile(attachment)
      const file2 = await context.prisma.attachment.create({ data: { ...file } })
      if (file2 && file2.id) {
        businessProfile.update.services.create[i].image.connect={id:file2.id}
        businessProfile.update.services.create[i].image.create=undefined;
       // v.args.data.businessProfile.update.services.create[i].image.connect= { id: file2.id } ;
       // delete v.args.data.businessProfile.update.services.create[i].image.create;
      }
      resolve(file2);
      });
      attachmentsTasks.push(task);    
  }
  await Promise.all(attachmentsTasks);
  return next(v)
}

//  upload image on service during update via user entry
@BlocAttach('updateOneUser.input.data.businessProfile.update.services.update.data.image.create.path')
async uploadServiceAttachment2(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  const { args, context } = v;
  const { data, ...rest } = args as {data:UserUpdateInput};
  const { businessProfile } = data 
  
  const attachmentsTasks = [];
  const services = businessProfile.update.services.update; 
  for(let i=0;i<services.length;i++){
    const attachment = services[i].data.image.create.path;    
      const task = new Promise(async (resolve,reject)=>{       
      const file = await uploadFile(attachment)
      const file2 = await context.prisma.attachment.create({ data: { ...file } })
      if (file2 && file2.id) {
        businessProfile.update.services.update[i].data.image.connect={id:file2.id};
        businessProfile.update.services.update[i].data.image.create=undefined;
        //v.args.data.businessProfile.update.services.update[i].data.imageId={set:file2.id};
        // delete v.args.data.businessProfile.update.services.update[i].data.image;
      }
      resolve(file2);
      });
      attachmentsTasks.push(task);
    }
  
  await Promise.all(attachmentsTasks);
  return next(v)
}


//  upload receipt on orders during update via user entry
@BlocAttach('updateOneUser.input.data.businessProfile.update.orders.update.data.receipt.create.path')
async uploadOrderReceiptAttachment(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  const { args, context } = v;
  const { data, ...rest } = args as {data:UserUpdateInput};
  const { businessProfile } = data 
 
  const attachmentsTasks = [];
  const orders = businessProfile.update.orders.update; 
  for(let i=0;i<orders.length;i++){
    const attachment = orders[i].data.receipt.create.path;    
      const task = new Promise(async (resolve,reject)=>{       
      const file = await uploadFile(attachment)
      const file2 = await context.prisma.attachment.create({ data: { ...file } })
      if (file2 && file2.id) {
        businessProfile.update.orders.update[i].data.receipt.connect={id:file2.id};
        businessProfile.update.orders.update[i].data.receipt.create=undefined;
       // v.args.data.businessProfile.update.orders.update[i].data.receiptId = {set:file2.id};
        
       // delete v.args.data.businessProfile.update.orders.update[i].data.receipt;
      }
      resolve(file2);
      });
      attachmentsTasks.push(task);
    }
  
  await Promise.all(attachmentsTasks);
  return next(v)
}
//Link orders with business
@BlocAttach('updateOneUser.input.data.ordered.create.service.connect.id')
async linkOrderAndBusiness(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any){
  const { args, context } = v;
  const { data, ...rest } = args as {data:UserUpdateInput};
  
  const tasks = [];
  const orders = data.ordered.create; 
  for(let i=0;i<orders.length;i++){
    const order = orders[i];    
      const task = new Promise(async (resolve,reject)=>{       
      const business = await context.prisma.service.findUnique({ where:{id:order.service.connect.id},select:{id:true,businessId:true} })
      if (business&&business.businessId) {
        data.ordered.create[i].business= {connect:{id:business.businessId}}
        //v.args.data.ordered.create[i].business= {connect:{id:business.businessId}};
      }
      
      resolve(business);
      });
      tasks.push(task);
    }
  
  await Promise.all(tasks).catch((e)=>{});
  return next(v)
}




// HELP  ATTACHMENTS
@BlocAttach('createOneHelp.input.data.steps.create.attachments.create.path')
async uploadHelpAttachment(v: BusinessRequest<TenantContext>,next){
  const { args, context } = v;
  const { data, ...rest } = args;
  const { steps } = data;
  const operations = [];
  
  for(let i=0;i<steps?.create?.length;i++){
        const step = steps.create[i];
        const {attachments} = step;
          const op = ()=>{
            return new Promise(async(resolve,reject)=>{
              if(attachments.create.length){
          const files = await this.createAttachments(attachments,context);
          const filesIds = files.map((v)=>({id:v.id}))
          v.args.data.steps.create[i].attachments.connect=filesIds;
          v.args.data.steps.create[i].attachments.create=undefined;
        }
          return resolve(v);
        });
      }
        operations.push(op());    
    }

  const vv = await Promise.all(operations);
  
  return next(v)
}

// upload files during help update and helpstep creation
@BlocAttach('updateOneHelp.input.data.steps.create.attachments.create.path')
async uploadHelpAttachment2(v:BusinessRequest<TenantContext>,next){
  const { args, context } = v;
  const { data, ...rest } = args;
  const { steps } = data;
  const operations = [];
  
  for(let i=0;i<steps?.create?.length;i++){
        const step = steps.create[i];
        const {attachments} = step;
          const op = ()=>{
            return new Promise(async(resolve,reject)=>{
              if(attachments.create.length){
          const files = await this.createAttachments(attachments,context);
          const filesIds = files.map((v)=>({id:v.id}))
          v.args.data.steps.create[i].attachments.connect=filesIds;
           v.args.data.steps.create[i].attachments.create=undefined;
        }
          return resolve(v);
        });
      }
        operations.push(op());    
    }

  const vv = await Promise.all(operations);
  
  return next(v)
}

// upload files during help update and helpstep update
@BlocAttach('updateOneHelp.input.data.steps.update.data.attachments.create.path')
async uploadHelpAttachment3(v:BusinessRequest<TenantContext>,next: (arg0: BusinessRequest<any>) => any){
  const { args, context } = v;
  const { data, ...rest } = args;
  const { steps } = data;
  const operations = [];
  
  for(let i=0;i<steps?.update?.length;i++){
        const step = steps.update[i];
        const {attachments} = step.data;
          const op = ()=>{
            return new Promise(async(resolve,reject)=>{
              if(attachments.create.length){
          const files = await this.createAttachments(attachments,context);
          const filesIds = files.map((v)=>({id:v.id}))
          v.args.data.steps.update[i].data.attachments.connect=filesIds;
          v.args.data.steps.update[i].data.attachments.create=undefined;
        }
          return resolve(v);
        });
      }
        operations.push(op());    
    }
  const vv = await Promise.all(operations);
  
  return next(v)
}

//Location handlers
async createGeomFromLocation(location: Location,context: TenantContext){
      //create a geom here
      const affected = await context.prisma.$executeRaw`UPDATE "Location" 
      SET 
      geom=ST_SetSRID(ST_MakePoint(${location.lon}, ${location.lat}), 4326)
      where id=${location.id};`;
       return affected;
    }
//create user location 
@BlocAttach('updateOneUser.input.data.location.create.lat')
async createUserLocation(v: BusinessRequest<TenantContext>, next) {
      const { args, context } = v;
      const { prisma, logger } = context;
      const { data, where,...rest } = args as {data:UserUpdateInput,where:UserWhereUniqueInput};
      const { location, ...others } = data
      const { lat, lon,name, } = location.create;
      const loc = await prisma.location.create({
        data: {name, lat, lon }
      });
      if (loc && loc.id) {
         const affected = await this.createGeomFromLocation(loc,context)
        if (affected) {
          const inputs = {
            ...others,
            location: {
              connect: { id: loc.id }
            }
          }
          v.args = { ...rest,where, data: inputs }
          //Todo link business here
          const user = await prisma.user.findUnique({
            where:{id: context.auth.uid??where.id},
            select: {                
              businessProfile:{
                select:{
                id:true,
                mode:true
              }}
            }
          })
          if(user.businessProfile&&user.businessProfile.id&&user.businessProfile.mode==BusinessMode.MOBILE_MODE){
            await prisma.business.update({
              where:{id:user.businessProfile.id},
              data: {
                location:{
                  connect:{
                    id: loc.id
                  }
                }
              }
            })
          }
        } 
      }
      
      return next(v)
    }
// update user location
@BlocAttach('updateOneUser.input.data.location.update.lat.set')
async updateUserLocation(v: BusinessRequest<TenantContext>, next) {
      const { args, context } = v;
      const { prisma, logger } = context;
      const { data,where, ...rest } = args as {data:UserUpdateInput,where:UserWhereUniqueInput};
      const { location, ...others } = data
      
      const { name, lat, lon } = location.update;
      const user1 = await prisma.user.findUnique({where:{id:context.auth.uid??where.id},select:{
        location:true,        
        businessProfile:{
          select:{
          id:true,
          mode:true,
          location:true
        }}}}
        )
       let locationInput;
        if(user1.businessProfile.mode==BusinessMode.OFFICE_MODE &&
          user1.location?.id==user1.businessProfile.location?.id){
            locationInput = {
              create:{
                name:name.set,lat:lat.set,lon:lon.set
              }
            }
        }
        else{
          locationInput={
            update: {
              name,lat,lon
            }
          }
        }
     const user= await prisma.user.update({
        where:{
          id: context.auth.uid??where.id
        },
        data: { 
          location:locationInput
         }
      ,select:{
        location:true,        
        businessProfile:{
          select:{
          id:true,
          mode:true
        }}
        
      }
      });
    
      if (user.location && user.location.id) {
         const affected = await this.createGeomFromLocation(user.location,context)
        if (affected) {
           delete data.location
          v.args = { ...rest,where, data }
          //Todo link business here
          if(user.businessProfile&&user.businessProfile.id&&user.businessProfile.mode==BusinessMode.MOBILE_MODE){
            await prisma.business.update({
              where:{id:user.businessProfile.id},
              data: {
                location:{
                  connect:{
                    id: user.location.id
                  }
                }
              }
            })
          }
        } 
      }
      
      return next(v)
    }
// upsert user location
@BlocAttach('updateOneUser.input.data.location.upsert.create.lat')
async upsertUserLocation(v: BusinessRequest<TenantContext>, next) {
          const { args, context } = v;
          const { prisma, logger } = context;
          const { data,where, ...rest } = args as {data:UserUpdateInput,where:UserWhereUniqueInput};
          const { location, ...others } = data
          
          const { name, lat, lon, heading } = location.upsert.create;
          const locationResult = await prisma.location.create({
            data:{name,lat,lon,heading}
          })
         
            
         const user= await prisma.user.findUnique({
            where:{
              id: context.auth.uid??where.id
            }            
          ,select:{
            id:true,
            location:true,        
            businessProfile:{
              select:{
              id:true,
              mode:true
            }}
            
          }
          });
        
          if (locationResult && locationResult.id) {
             const affected = await this.createGeomFromLocation(locationResult,context)
            if (affected) { 
              data.location={connect:{id:locationResult.id} }            
              v.args = { ...rest,where, data }
              
              if(user.businessProfile&&user.businessProfile.id&&user.businessProfile.mode==BusinessMode.MOBILE_MODE){
                await prisma.business.update({
                  where:{id:user.businessProfile.id},
                  data: {
                    location:{
                      connect:{
                        id: locationResult.id
                      }
                    }
                  }
                })
              }
            } 
          }
          
          return next(v)
        }

//create business address 
@BlocAttach('updateOneUser.input.data.businessProfile.create.location.create.lat')
async createBusinessLocation(v: BusinessRequest<TenantContext>, next) {
  const { args, context } = v;
  const { prisma, logger } = context;
  const { data, where,...rest } = args as {data:UserUpdateInput,where:UserWhereUniqueInput};
  const { businessProfile, ...others } = data
  const { name, lat, lon }:LocationCreateInput = businessProfile.create.location.create;
 
  const loc = await prisma.location.create({
    data: { name, lat, lon }
  });
  if (loc && loc.id) {
     const affected = await this.createGeomFromLocation(loc,context)
    if (affected) { 
      businessProfile.create.location.connect={id:loc.id};   
      businessProfile.create.location.create=undefined 
     // v.args.data.businessProfile.create.locationId = loc.id;
     // delete data.businessProfile.create.location;
    } 
  }
  
  return next(v)
}
//update business address here
@BlocAttach('updateOneUser.input.data.businessProfile.update.location.update.lat.set')
async updateBusinessLocation(v: BusinessRequest<TenantContext>, next) {
  const { args, context } = v;
  const { prisma, logger } = context;
  const { data,where, ...rest } = args as {data:UserUpdateInput,where:UserWhereUniqueInput};
  const { businessProfile, ...others } = data
  const { name, lat, lon } = businessProfile.update.location.update;
  
  const user = await prisma.user.update({
    where:{id:context.auth.uid??where.id},
    data:{
      businessProfile:{
        update:{
          location:{
            upsert:{
              create:{
                name:name.set,
                lat:lat.set,
                lon:lon.set
              },
            update:{
              name,
              lat,
              lon
            }}
          }
        }
      }
    },
   select:{
     id:true,
     businessProfile:{
       select:{
         id:true,
         location:true
       }
     }
   }
  });

  if (user.businessProfile.location && user.businessProfile.location.id) {
     const affected = await this.createGeomFromLocation(user.businessProfile.location,context)
    if (affected) {     
      businessProfile.update.location=undefined;
      //delete v.args.data.businessProfile.update.location;
    } 
  }
  
  return next(v)
}
// upsert business address here
@BlocAttach('updateOneUser.input.data.businessProfile.upsert.create.location.create.lat')
async upsertBusinessLocation(v: BusinessRequest<TenantContext>, next) {
  const { args, context } = v;
  const { prisma, logger } = context;
  const { data,where, ...rest } = args as {data:UserUpdateInput,where:UserWhereUniqueInput};
  const { businessProfile, ...others } = data
  const { name, lat, lon,heading } = businessProfile.upsert.create.location.create;
  
  const location = await prisma.location.create({
    data:{name,lat,lon,heading},    
  });

  if (location && location.id) {
     const affected = await this.createGeomFromLocation(location,context)
    if (affected) {     
      businessProfile.upsert.update.location={connect:{id:location.id}};
      businessProfile.upsert.create.location = {connect:{id:location.id}}
      
    } 
  }
  
  return next(v)
}

@BlocAttach('updateOneUser.input.data.favorited.create.favId')
async generateFavoriteId(v: BusinessRequest<TenantContext>, next){
  const { args, context } = v;
  const { prisma, logger } = context;
  const { data, where,...rest } = args as {data:UserUpdateInput,where:UserWhereUniqueInput};
  
  const favorited = data.favorited.create; 
  const favTypes = await prisma.favoriteRecordType.findMany(); 
  for(let i=0;i<favorited.length;i++){
    const fav = favorited[i]; 
     const author=context.auth.uid??where.id;
     let key = `${fav.type.connect.name.toLowerCase()}`
      let itemId = fav[key]?.connect?.id
      if(itemId&&author) {
        data.favorited.create[i].favId = `${author}/${itemId}`
      //v.args.data.favorited.create[i].favId = `${author}/${itemId}`;
      }
      else{
        data.favorited.create[i].favId=undefined
      // delete v.args.data.favorited.create[i].favId;
      }
    }

  return next(v);
}


// Validation rules
@BlocValidate('signup.input.credentials.email')
async oneEmailPerAccount(v: BusinessRequest<TenantContext>) {
  const { args, context } = v;
  const { credentials } = args;
  const { prisma } = context;    
  const facts = await prisma.user.findUnique({ where: { email: credentials.email }, select: { email: true } })
  return { rules: [uniqueEmailPerAccount(credentials.email)], facts }
}

@BlocValidate('findUniqueUser')
async findUniqueUserBloc(v: BusinessRequest<TenantContext>) {
  const { args, context } = v;
  const { where } = args;
  const { auth, select } = context;
  const facts = { ...select.data.select, ...auth };
  return { rules: [isUserSensitiveInfo(where.id)], facts }
}

@BlocValidate('updateOneUser')
async updateOneUserBloc(v: BusinessRequest<TenantContext>) {
  const { args, context } = v;
  const { where } = args;
  const { auth } = context;
  return { rules: [onlyOwnerhasAccess(where.id)], facts: auth }
}
// subscriptions
// @BlocAttach('updateOneUser.input.data.location.upsert.create.lat')
// async notifyLocationChanges(v: BusinessRequest<TenantContext>, next){
// debugger;
//  return next(v)
// }
@PrismaAttach("User", "update")
  async orderCreated(req: PrismaHookRequest<User>, n: PrismaHookHandler) {
    const { result, prisma, params } = req;
    const order = result.ordered[0];
    const {action,args} = params as {action:string,args:{data:UserUpdateInput}};
    const publish = (topic:string,value)=>{        
      return this.redisPubSub.publish(topic, value);
  }
    //  Location updates
    if(args?.data?.location){
      
      this.logger.log("LOCATION CHANGED")
    await prisma.order.findMany({
      where:{
        AND:[
          {orderStatus:{equals:OrderStatus.ACCEPTED}},
        {OR:[
        {ownerId: { 
          equals:result.id
        }
      },
      {
        business:{    
          ownerId:{
            equals:result.id
          }
        }
      }
        ]
         } ]
      }
    }).then(
      (orders)=>{      
      return Promise.all(orders.map((v)=>publish(LOCATION_CHANGED_CHANNEL,v)));
      }
    )  
    }
  // Orders updates

  /**
   *  requestor actions
   */
  if(args?.data?.ordered?.create){
  //  order created
    this.logger.debug("ORDER CREATED",BusinessLogicService.name)
   
   
    await prisma.order.findUnique({where:{id:order.id},select:{
      business:{
        select:{
          owner:{
        select:{
          device:{
            select:{
              id:true,
              fcm_id:true
            }
          }
        }
      }
      }
      }
    }}).then((v)=>{
      const fcm_id = v.business.owner.device.fcm_id;
      const message: Notification = {
        message: "You have new service request",
        notificationType: NotificationType.ORDER_RECIEVED,
        payload:order
      };
      return publish(PUSH_MESSAGE_CHANNEL,{fcm_id,message,ttl:60})
    })
  }
  else if(args?.data?.ordered?.update){
    this.logger.debug("ORDER UPDATED",BusinessLogicService.name)
    const {data,where} = args.data.ordered.update[0];
     if(data.orderStatus == OrderStatus.REJECTED){
      // notify order cancelled by requester
     await prisma.order.findUnique({where:{id:where.id},select:{
        business:{
          select:{
            owner:{
          select:{
            device:{
              select:{
                id:true,
                fcm_id:true
              }
            }
          }
        }
        }
        }
      }}).then((v)=>{
        const fcm_id = v.business.owner.device.fcm_id;
        const message: Notification = {
          message: "Request was cancelled by customer",
          notificationType: NotificationType.ORDER_CANCELLED,
          payload:order
        };
        return publish(PUSH_MESSAGE_CHANNEL,{fcm_id,message,ttl:60})
      })
    }

    /**  
     *  Provider actions
    */
   if(args?.data?.businessProfile?.update?.orders?.update){
       const {data,where} = args.data.businessProfile.update.orders.update[0];
       if(data.orderStatus == OrderStatus.REJECTED){
        // notify order rejected by provider
       await prisma.order.findUnique({where:{id:where.id},select:{
          owner:{
            select:{
              device:{
                select:{
                  id:true,
                  fcm_id:true
                }
              }
            }
          
          }
        }}).then((v)=>{
          const fcm_id = v.owner.device.fcm_id;
          const message: Notification = {
            message: "Your request was declined by provider",
            notificationType: NotificationType.ORDER_CANCELLED,
            payload:order
          };
         return publish(PUSH_MESSAGE_CHANNEL,{fcm_id,message})
        })
      }
      else  if(data.orderStatus == OrderStatus.ACCEPTED){
       // notify order accepted by provider
     await  prisma.order.findUnique({where:{id:where.id},select:{
        owner:{
          select:{
            device:{
              select:{
                id:true,
                fcm_id:true
              }
            }
          }
        
        }
      }}).then((v)=>{
        const fcm_id = v.owner.device.fcm_id;
        const message: Notification = {
          message: "Your request was accepted by provider",
          notificationType: NotificationType.ORDER_ACCEPTED,
          payload:order
        };
       return publish(PUSH_MESSAGE_CHANNEL,{fcm_id,message,ttl:60})
      })
      }
   }
  }

    return n(req);
  }

  async sendNotification(data: {fcm_id:string,message: Notification,ttl:number}) {
    const {fcm_id,message,ttl} = data;
    
    if (fcm_id) {
      const result = await this.app.sendNotification(fcm_id, {
        notification: {
          title: message.message,
        },
        data: {
          payload: JSON.stringify(message)
        }
      }, {
        priority: "high",
        ttl:ttl
      }).catch(e => {
      this.logger.error(result,BusinessLogicService.name);
    });
    }
  }
// Field resolvers 
@BlocFieldResolver("Business","minPrice",function(this:BusinessLogicService,...args:[any,any,TenantContext,any]){
  return new DataLoader((async function (keys){
    
    const [parent,_,ctx,info] = args;
    const prices = new Map();
    (await ctx.prisma.service.groupBy({
      by: ['businessId'],
      _min: {
        price: true
      },
      where: {
        business: {
          id: {
            in: keys
          }
        }
      }
    })??[]).forEach(e => {
      prices.set(e.businessId,e._min.price)
    });
   return keys.map((k)=>prices.get(k)??0)
  }).bind(this))
})
minPrice(org:Business,args,ctx:TenantContext,info:any,dataloader:DataLoader<string,Number>){
  return dataloader.load(org.id);
}

@BlocFieldResolver("User","compoundRating",function(this:BusinessLogicService,...args:[any,any,TenantContext,any]){
  return new DataLoader((async function (keys){
    
    const [parent,_,ctx,info] = args;
    const ratings = new Map();
     (await ctx.prisma.review.groupBy({
      by: ['revieweeId'],
      _avg: {
        value: true
      },
      where: {
        reviewee: {
          id: {
            in: keys
          }
        }
      }
    })??[]).forEach(e => {
      ratings.set(e.revieweeId,e._avg.value)
    });
   return keys.map((k)=>ratings.get(k)??0.0)
  }).bind(this))
})
compoundRating(org:User,args,ctx:TenantContext,info:any,dataloader:DataLoader<string,Number>){
  return dataloader.load(org.id);
}


@BlocFieldResolver("Business","workCompleted",function(this:BusinessLogicService,...args:[any,any,TenantContext,any]){
  return new DataLoader((async function (keys){
    
    const [parent,_,ctx,info] = args;
    const deals = new Map();
    (await ctx.prisma.order.groupBy({
      by: ['businessId'],
      _count: {
        id: true
      },
      where: {
        orderStatus: {
          equals: OrderStatus.PROCESSED
        },
        business: {
          id: {
            in: keys
          }
        },

      }
    })??[]).forEach(e => {
      deals.set(e.businessId,e._count.id)
    });
   return keys.map((k)=>deals.get(k)??0)
  }).bind(this))
})
workCompleted(org:Business,args,ctx:TenantContext,info:any,dataloader:DataLoader<string,Number>){
  return dataloader.load(org.id);
}


@BlocFieldResolver("Business","distance",function(this:BusinessLogicService,...args:[any,any,TenantContext,any]){
  return new DataLoader((async function (keys){
    
    const [parent,_,ctx,info] = args;
    const distances = new Map();
    // let cachedDistances= JSON.parse((await ctx.redisCache.get(`distances-${ctx.auth.uid}`))??"[]");
  // cachedDistances?.length==0&&
  let cachedDistances;
   
    if(ctx.auth?.uid){
      //calculate distance here
      let location;
      const cachedLoc = await ctx.redisCache.get(`location/${ctx.auth?.uid}`);
      if(cachedLoc){
        location = JSON.parse(cachedLoc);
      }
      if(!location){
      const user = await ctx.prisma.user.findUnique({where:{id:ctx.auth?.uid},select:{
        location:{
          select:{
            lat:true,
            lon:true
          }
        }
      }});
      location = user?.location;
    }
      if(location?.lon&&location?.lat){
      cachedDistances= await ctx.prisma.$queryRaw`
      SELECT "Business".id as id,
      ST_Distance( ST_SetSRID(ST_MakePoint(${location.lon},${location.lat} ), 4326), "Location".geom) as distance
      FROM "Business"
      INNER JOIN "Location" ON "Business"."locationId"="Location".id
      WHERE "Business".id IN (${Prisma.join(keys)});
      `
      }
    }
    (cachedDistances??[]).forEach(e => {
      distances.set(e.id,e.distance)
    });
   return keys.map((k)=>distances.get(k)??0)
  }).bind(this))
})
distance(org:Business,args,ctx:TenantContext,info:any,dataloader:DataLoader<string,Number>){
  return dataloader.load(org.id);
}

@BlocFieldResolver("Business","cancelation",function(this:BusinessLogicService,...args:[any,any,TenantContext,any]){
  return new DataLoader((async function (keys){
    
    const [parent,_,ctx,info] = args;
    const rejected = new Map();
     (await ctx.prisma.order.groupBy({
      by: ['businessId'],
      
      _count:{
        id:true
      },
      where: {
        orderStatus:{equals:OrderStatus.REJECTED},
        business: {
          id: {
            in: keys
          }
        }
      }
    })??[]).forEach(e => {
      rejected.set(e.businessId,e._count.id)
    });
    const accepted = new Map();
    (await ctx.prisma.order.groupBy({
     by: ['businessId'],
     
     _count:{
       id:true
     },
     where: {
       orderStatus:{in:[OrderStatus.ACCEPTED,OrderStatus.PROCESSED]},
       business: {
         id: {
           in: keys
         }
       }
     }
   })??[]).forEach(e => {
    accepted.set(e.businessId,e._count.id)
   });

   return keys.map((k)=>{
    const total = ((rejected.get(k)??0)+(accepted.get(k)??0))
    if(total==0)return 0.0;
    return (rejected.get(k)??0)/total;    
  }
    )}).bind(this))
})
cancelation(org:Business,args,ctx:TenantContext,info:any,dataloader:DataLoader<string,Number>){
  return dataloader.load(org.id);
}
@BlocFieldResolver("Business","acceptance",function(this:BusinessLogicService,...args:[any,any,TenantContext,any]){
  return new DataLoader((async function (keys){
    
    const [parent,_,ctx,info] = args;
    const rejected = new Map();
     (await ctx.prisma.order.groupBy({
      by: ['businessId'],
      
      _count:{
        id:true
      },
      where: {
        orderStatus:{equals:OrderStatus.REJECTED},
        business: {
          id: {
            in: keys
          }
        }
      }
    })??[]).forEach(e => {
      rejected.set(e.businessId,e._count.id)
    });
    const accepted = new Map();
    (await ctx.prisma.order.groupBy({
     by: ['businessId'],
     
     _count:{
       id:true
     },
     where: {
       orderStatus:{in:[OrderStatus.ACCEPTED,OrderStatus.PROCESSED]},
       business: {
         id: {
           in: keys
         }
       }
     }
   })??[]).forEach(e => {
    accepted.set(e.businessId,e._count.id)
   });

   return keys.map((k)=>{
    const total = ((rejected.get(k)??0)+(accepted.get(k)??0))
    if(total==0)return 0.0;
    return (accepted.get(k)??0)/total;
  }
    )}).bind(this))
})
acceptance(org:Business,args,ctx:TenantContext,info:any,dataloader:DataLoader<string,Number>){
  return dataloader.load(org.id);
}

@BlocFieldResolver("Business","clients",function(this:BusinessLogicService,...args:[any,any,TenantContext,any]){
  return new DataLoader((async function (keys){
    
    const [parent,_,ctx,info] = args;
    const clients = new Map();
     (await ctx.prisma.order.groupBy({
      by: ['businessId'],
      
      _count:{
        ownerId:true
      },
      where: {
        orderStatus:{equals:OrderStatus.PROCESSED},
        business: {
          id: {
            in: keys
          }
        }
      }
    })??[]).forEach(e => {
      clients.set(e.businessId,e._count.ownerId)
    });
    

     return keys.map((k)=> clients.get(k)??0.0);
  
    }).bind(this))
})
clients(org:Business,args,ctx:TenantContext,info:any,dataloader:DataLoader<string,Number>){
  return dataloader.load(org.id);
}
// @BlocFieldResolver("User","location",function(this:BusinessLogicService,...args){
//   return new DataLoader((async function (keys){      
//     const locations= await this.redisCache.mget(keys);
//     return locations;
//   }).bind(this))
// })
//   async userLocation(user:User,args,ctx:TenantContext,info:any,dataloader:DataLoader<string,any>){
  
//     return dataloader.load(`location/${user.id}`);
//   }

@BlocFieldResolver("User","lastSeen",function(this:BusinessLogicService,...args){
  return new DataLoader((async function (keys){ 
    const [parent,_,ctx,info,] = args;   
    const lastseen= await ctx.redisCache.mget(keys);
    return lastseen;
  }).bind(this))
})
async lastSeen(parent:User,args, ctx:TenantContext,info:any,
 dataloader:DataLoader<string,string>) {
  return dataloader.load(`last-seen-${parent.id}`);
}
@BlocFieldResolver("User","experience",function(this:BusinessLogicService,...args){
  return new DataLoader((async function (keys){ 
    const [parent,_,ctx,info,] = args;
    const joined= new Map();
    const now = Date.now();
    
    (await ctx.prisma.user.findMany({where:{
      id:{
        in:keys
      }
    },select:{id:true,createdAt:true}})).forEach((user)=>joined.set(user.id, now - Date.parse(user.createdAt)));
  
    return keys.map((k)=>joined.get(k))
  }).bind(this))
})
async experience(parent:User,args, ctx:TenantContext,info:any,
 dataloader:DataLoader<string,string>) {
  return dataloader.load(parent.id);
}




}



 /* @BlocAttach('updateOneService.input.data.image.create.path')
  @BlocAttach('createOneService.input.data.image.create.path')
  async serviceImage(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
    
    const { args, context } = v;
    const { data, ...rest } = args;
    const { image } = data
    const file = await uploadFile(image.create.path)
    const file2 = await context.prisma.attachment.create({ data: { ...file } })

    if (file2 && file2.id) {
      v.args.data.image = { connect: { id: file2.id } };
    }
    return next(v)
  }

  @BlocAttach('updateOneOrder.input.data.receipt.create.path')  
  async orderReceipt(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
    
    const { args, context } = v;
    const { data, ...rest } = args;
    const { receipt } = data
    const file = await uploadFile(receipt.create.path)
    const file2 = await context.prisma.attachment.create({ data: { ...file } })

    if (file2 && file2.id) {
      v.args.data.receipt = { connect: { id: file2.id } };
    }
    return next(v)
  } */


  /* //Attachments at root models
  @BlocAttach('createOneReview.input.data.attachments.create.path')
  @BlocAttach('createOneComment.input.data.attachments.create.path')
  async uploadAttachment(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
    const { args, context } = v;
    if(context["uploadAttachment"]==true){
      return next(v);
    }
    const { data, ...rest } = args;
    const { attachments } = data;
    const {create,...opts}=attachments;

    
    const files2 = await this.createAttachments(attachments,context);
    
    v.args.data.attachments = { ...opts,connect: files2.map((e)=>({id:e.id}))};
   //mark context as having attachment processed
    v.context["uploadAttachment"]=true;
    
    return next(v)
  } */










//PRISMA hooks to manipulate data

  // @PrismaAttach('Organization', "findUnique")
  // @PrismaAttach('Organization', "findFirst")
  // async findUniqueOrganization(args: PrismaHookRequest<Organization>, n: PrismaHookHandler) {
  //   const { prisma, params, result, context } = args;
  //   //const pArgs: Prisma.OrganizationFindUniqueArgs = params.args;
  //   // TODO aggregate rating of orgnization
  //   const ratings = await prisma.rating.groupBy({
  //     by: ['organizationId'],
  //     _avg: {
  //       value: true
  //     },
  //     where: {
  //       organization: {
  //         id: {
  //           equals: result.id
  //         }
  //       }
  //     }
  //   })
  //   // TODO aggregate min price
  //   const prices = await prisma.service.groupBy({
  //     by: ['organizationId'],
  //     _min: {
  //       price: true
  //     },
  //     where: {
  //       organization: {
  //         id: {
  //           equals: result.id
  //         }
  //       }
  //     }
  //   })
  //   // TODO agregate number of deals done 
  //   const deals = await prisma.order.groupBy({
  //     by: ['organizationId'],
  //     _count: {
  //       id: true
  //     },
  //     where: {
  //       state: {
  //         equals: State.COMPLETED
  //       },
  //       organization: {
  //         id: {
  //           equals: result.id
  //         }
  //       },

  //     }
  //   });
  //   // TODO aggregate distance from requester



  //   let work = deals.find((d) => d.organizationId === result.id);
  //   let min = prices.find((p) => p.organizationId == result.id);
  //   let rate = ratings.find((r) => r.organizationId);

  //   const res = {
  //     ...result,
  //     compoundRating: rate?._avg?.value ?? 0,
  //     workCompleted: work?._count?.id ?? 0,
  //     minPrice: min?._min?.price ?? 0,
  //     distance: 0
  //   }

  //   args.result = res;
  //   return n(args);
  // }
  // @PrismaAttach('Organization', "findMany")
  // async findManyOrganization(args: PrismaHookRequest<Organization[]>, n: PrismaHookHandler) {
  //   const { prisma, params, result, context } = args;
  //   const pArgs: Prisma.OrganizationFindManyArgs = params.args;

  //   const ids = result.map((e) => e.id);
    
  //   // TODO aggregate rating of orgnization
  //   const ratings = await prisma.rating.groupBy({
  //     by: ['organizationId'],
  //     _avg: {
  //       value: true
  //     },
  //     where: {
  //       organization: {
  //         id: {
  //           in: ids
  //         }
  //       }
  //     }
  //   })
  //   // TODO aggregate min price
  //   const prices = await prisma.service.groupBy({
  //     by: ['organizationId'],
  //     _min: {
  //       price: true
  //     },
  //     where: {
  //       organization: {
  //         id: {
  //           in: ids
  //         }
  //       }
  //     }
  //   })
  //   // TODO agregate number of deals done 
  //   const deals = await prisma.order.groupBy({
  //     by: ['organizationId'],
  //     _count: {
  //       id: true
  //     },
  //     where: {
  //       state: {
  //         equals: State.COMPLETED
  //       },
  //       organization: {
  //         id: {
  //           in: ids
  //         }
  //       },

  //     }
  //   });
    


  //   let res = result.map((v) => {
  //     let work = deals.find((d) => d.organizationId === v.id);
  //     let min = prices.find((p) => p.organizationId == v.id);
  //     let rate = ratings.find((r) => r.organizationId == v.id);
     
  //     return {
  //       ...v,
  //       compoundRating: rate?._avg?.value ?? 0,
  //       workCompleted: work?._count?.id ?? 0,
  //       minPrice: min?._min?.price ?? 0,
  //       distance: 0
  //     }
  //   });
  //   args.result = res;
  //   return n(args);
  // }