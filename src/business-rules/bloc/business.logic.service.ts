import { AppLogger } from "@mechsoft/app-logger";
import { Bloc, BlocAttach, BlocFieldResolver, BlocValidate, BusinessRequest, PrismaAttach, PrismaHookHandler, PrismaHookRequest } from "@mechsoft/business-rules-manager";
import { TenantContext } from "@mechsoft/common";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
//import { BusinessCreateArgs } from "@prisma/client";
import * as DataLoader from "dataloader";
import { AuthService, } from "src/app-schemas/auth/auth-service";
import {  BusinessCreateWithoutOwnerInput, User, UserCreateInput, UserUpdateInput } from "src/models/graphql";
import { RedisCache } from "src/pubsub/redis.service";
import { uploadFile } from "src/utils/file.utils";
import {SignupInput} from "../../models/graphql";
//import * as uuid from 'uuid';
import {
  canCreateOnlyOneOrganization, isUserSensitiveInfo,
  onlyConnectActiveOffers, onlyConnectOwnerSelf,
  onlyConsumerCanCompleteOrder,
  onlyOwnerOrProviderOrManagerCanUpdateOrder,
  onlyOwnerhasAccess,
  onlyProviderAndManagerCanProcessOrder,
  onlyServiceOfferedByOrg,
  onlyConsumerWithCompletedOrRejectedOrderCanRateOrganization,
  onlyOneRatingPerConsumerOrganizationPair,
  onlyOwnerOfRecordAllowed,
  uniqueEmailPerAccount
} from '../rules.definitions';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
@Bloc()
export class BusinessLogicService {
  constructor(
    private readonly logger: AppLogger,
    private readonly redisCache: RedisCache,
    private readonly authService: AuthService
  ) {
    //this.logger.setContext(BusinessLogicService.name);
    
  }
 get redis(): RedisCache{
    return this.redisCache;
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

  @PrismaAttach("User","create",true)
  async createFirebaseUser(v:PrismaHookRequest<UserCreateInput>,next: PrismaHookHandler){ 
    
    const {displayName,email,phoneNumber,password} = v.params.args.data;
    this.logger.debug("create user",displayName,email,phoneNumber,password);
    
    // Create a firebase user here
    try{
    const user = await this.authService.createUserWithEmail(email,password??uuidv4(),displayName,phoneNumber);
    v.params.args.data.id=user.uid;
    delete v.params.args.data.password;
    //Todo send email to resset password
    // if(!password){
    // FIXME: send email to reset password return undifined error
    // await this.authService.sendPasswordResetEmail({email,displayName,phoneNumber,id:user.uid});
    // }   
    return next(v);
    }catch(e){
      if(v.params.args.data.id){
        await this.authService.deleteFirebaseUser(v.params.args.data.id).catch(e=>{
          this.logger.error("delete firebase user",e);
        });
        }
      // if(e.code==="auth/email-already-exists"){
      //   throw new HttpException("Email already exists",HttpStatus.BAD_REQUEST);
      // }
      // if(e.code==="auth/invalid-email"){
      //   throw new HttpException("Invalid email",HttpStatus.BAD_REQUEST);
      // }
      // if(e.code==="auth/weak-password"){
      //   throw new HttpException("Weak password",HttpStatus.BAD_REQUEST);
      // }
      // if(e.code==="auth/argument-error"){
      //   throw new HttpException("Invalid password",HttpStatus.BAD_REQUEST);
      // } 
      // if(e.code==="auth/network-request-failed"){
      //   throw new HttpException("Network error",HttpStatus.BAD_REQUEST);
      // }  
      // if(e.code==="auth/operation-not-allowed"){
      //   throw new HttpException("Operation not allowed",HttpStatus.BAD_REQUEST);
      // }
      // if(e.code==="auth/phone-number-already-exists"){
      //   throw new HttpException("Phone number already exists",HttpStatus.BAD_REQUEST);
      // }  
      
      throw e;
    }
  }

  @PrismaAttach("User","delete",false)
  async deleteFirebaseUser(v:PrismaHookRequest<UserCreateInput>,next: PrismaHookHandler){ 
    const {id} = v.params.args.where;
    // delete a firebase user here
     await this.authService.deleteFirebaseUser(id);
    this.logger.debug("delete user",id);
    return next(v);
  }

  // upload user avator during signup
  @BlocAttach('signup.input.credentials.avator')
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
  }

 
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

//upload attachment for gallery on bussiness during update via user entry
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
        v.args.data.businessProfile.update.attachments.connect=connect;
        v.args.data.businessProfile.update.attachments.create.splice(j,1)
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
        v.args.data.businessProfile.update.services.create[i].image.connect= { id: file2.id } ;
        delete v.args.data.businessProfile.update.services.create[i].image.create;
      }
      resolve(file2);
      });
      attachmentsTasks.push(task);    
  }
  await Promise.all(attachmentsTasks);
  return next(v)
}

//  upload image on service during update via user entry
@BlocAttach('updateOneUser.input.data.businessProfile.update.services.update.data.image.path')
async uploadServiceAttachment2(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  const { args, context } = v;
  const { data, ...rest } = args as {data:UserUpdateInput};
  const { businessProfile } = data 
  
  const attachmentsTasks = [];
  const services = businessProfile.update.services.update; 
  for(let i=0;i<services.length;i++){
    const attachment = services[i].data.image.path;    
      const task = new Promise(async (resolve,reject)=>{       
      const file = await uploadFile(attachment)
      const file2 = await context.prisma.attachment.create({ data: { ...file } })
      if (file2 && file2.id) {
        v.args.data.businessProfile.update.services.update[i].data.imageId={set:file2.id};
         //delete
         delete v.args.data.businessProfile.update.services.update[i].data.image;
      }
      resolve(file2);
      });
      attachmentsTasks.push(task);
    }
  
  await Promise.all(attachmentsTasks);
  return next(v)
}


//  upload receipt on orders during update via user entry
@BlocAttach('updateOneUser.input.data.businessProfile.update.orders.update.data.receipt.path')
async uploadOrderReceiptAttachment(v: BusinessRequest<TenantContext>, next: (arg0: BusinessRequest<any>) => any) {
  const { args, context } = v;
  const { data, ...rest } = args as {data:UserUpdateInput};
  const { businessProfile } = data 
 
  const attachmentsTasks = [];
  const orders = businessProfile.update.orders.update; 
  for(let i=0;i<orders.length;i++){
    const attachment = orders[i].data.receipt.path;    
      const task = new Promise(async (resolve,reject)=>{       
      const file = await uploadFile(attachment)
      const file2 = await context.prisma.attachment.create({ data: { ...file } })
      if (file2 && file2.id) {
        v.args.data.businessProfile.update.orders.update[i].data.receiptId = {set:file2.id};
        
        delete v.args.data.businessProfile.update.orders.update[i].data.receipt;
      }
      resolve(file2);
      });
      attachmentsTasks.push(task);
    }
  
  await Promise.all(attachmentsTasks);
  return next(v)
}





// HELP  ATTACHMENTS
@BlocAttach('createOneHelp.input.data.steps.create.attachments.create.path')
async uploadHelpAttachment(v: BusinessRequest<TenantContext>,next){
  const { args, context } = v;
  const { data, ...rest } = args;
  const { steps } = data;
  const operations = [];
  debugger
  for(let i=0;i<steps?.create?.length;i++){
        const step = steps.create[i];
        const {attachments} = step;
          const op = ()=>{
            return new Promise(async(resolve,reject)=>{
              if(attachments.create.length){
          const files = await this.createAttachments(attachments,context);
          const filesIds = files.map((v)=>({id:v.id}))
          v.args.data.steps.create[i].attachments.connect=filesIds;
          delete v.args.data.steps.create[i].attachments.create;
        }
          return resolve(v);
        });
      }
        operations.push(op());    
    }

  const vv = await Promise.all(operations);
  debugger
  return next(v)
}

// upload files during help update and helpstep creation
@BlocAttach('updateOneHelp.input.data.steps.create.attachments.create.path')
async uploadHelpAttachment2(v:BusinessRequest<TenantContext>,next){
  const { args, context } = v;
  const { data, ...rest } = args;
  const { steps } = data;
  const operations = [];
  debugger
  for(let i=0;i<steps?.create?.length;i++){
        const step = steps.create[i];
        const {attachments} = step;
          const op = ()=>{
            return new Promise(async(resolve,reject)=>{
              if(attachments.create.length){
          const files = await this.createAttachments(attachments,context);
          const filesIds = files.map((v)=>({id:v.id}))
          v.args.data.steps.create[i].attachments.connect=filesIds;
          delete v.args.data.steps.create[i].attachments.create;
        }
          return resolve(v);
        });
      }
        operations.push(op());    
    }

  const vv = await Promise.all(operations);
  debugger
  return next(v)
}

// upload files during help update and helpstep update
@BlocAttach('updateOneHelp.input.data.steps.update.data.attachments.create.path')
async uploadHelpAttachment3(v:BusinessRequest<TenantContext>,next: (arg0: BusinessRequest<any>) => any){
  const { args, context } = v;
  const { data, ...rest } = args;
  const { steps } = data;
  const operations = [];
  debugger
  for(let i=0;i<steps?.update?.length;i++){
        const step = steps.update[i];
        const {attachments} = step.data;
          const op = ()=>{
            return new Promise(async(resolve,reject)=>{
              if(attachments.create.length){
          const files = await this.createAttachments(attachments,context);
          const filesIds = files.map((v)=>({id:v.id}))
          v.args.data.steps.update[i].data.attachments.connect=filesIds;
          delete v.args.data.steps.update[i].data.attachments.create;
        }
          return resolve(v);
        });
      }
        operations.push(op());    
    }
  const vv = await Promise.all(operations);
  debugger
  return next(v)
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


// Field resolvers 
@BlocFieldResolver("User","lastSeen",function(this:BusinessLogicService,...args){
  return new DataLoader((async function (keys: any){  
    debugger    
    const lastseen= await this.redisCache.mget(keys);
    return lastseen;
  }).bind(this))
})
async lastSeen(parent:User,args: any, ctx:TenantContext,info:any,
 dataloader:DataLoader<string,string>) {
  return dataloader.load(`last-seen-${parent.id}`);
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

    debugger
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