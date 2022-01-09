
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Help,
      HelpResponse,
      HelpBatchResponse,
      HelpCountResponse,
      HelpListResponse,
      AggregateHelpResponse,
    //  HelpCreateInput,
    //  HelpUpdateInput,
     // HelpUpdateManyMutationInput,
     // HelpWhereUniqueInput,
     // HelpWhereInput,
     // HelpOrderByInput,
     // HelpScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Help)
      @UseGuards(AuthorizerGuard)
      export class HelpResolver {
          
         
    @Query((returns)=>HelpResponse)

    findUniqueHelp(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<HelpResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Help', { select: {  } });
      return ctx.prisma.help.findUnique({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }
    @Query((returns)=>HelpResponse)
    findFirstHelp(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<HelpResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Help', { select: {  } });
      return ctx.prisma.help.findFirst({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:[],
       message:message||'unknown error'
      }));
      
    }
    @Query((returns)=>HelpListResponse)
    findManyHelp(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<HelpListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Help', { select: {  } });
      return ctx.prisma.help.findMany({...args,...select})
      .then((data)=>({
        status:true,
        data:data??[],
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:[],
       message:message||'unknown error'
      }));
      
    }
    @Mutation((returns)=>HelpResponse)
    createOneHelp(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<HelpResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Help', { select: {  } });
      return ctx.prisma.help.create({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }
    @Mutation((returns)=>HelpResponse)
    updateOneHelp(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<HelpResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Help', { select: {  } });
      return ctx.prisma.help.update({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }
        }