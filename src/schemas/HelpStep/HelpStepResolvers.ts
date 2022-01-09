
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      HelpStep,
      HelpStepResponse,
      HelpStepBatchResponse,
      HelpStepCountResponse,
      HelpStepListResponse,
      AggregateHelpStepResponse,
    //  HelpStepCreateInput,
    //  HelpStepUpdateInput,
     // HelpStepUpdateManyMutationInput,
     // HelpStepWhereUniqueInput,
     // HelpStepWhereInput,
     // HelpStepOrderByInput,
     // HelpStepScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>HelpStep)
      @UseGuards(AuthorizerGuard)
      export class HelpStepResolver {
          
         
    @Query((returns)=>HelpStepResponse)

    findUniqueHelpStep(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<HelpStepResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'HelpStep', { select: {  } });
      return ctx.prisma.helpStep.findUnique({...args,...select})
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
    @Query((returns)=>HelpStepResponse)
    findFirstHelpStep(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<HelpStepResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'HelpStep', { select: {  } });
      return ctx.prisma.helpStep.findFirst({...args,...select})
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
    @Query((returns)=>HelpStepListResponse)
    findManyHelpStep(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<HelpStepListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'HelpStep', { select: {  } });
      return ctx.prisma.helpStep.findMany({...args,...select})
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
    @Mutation((returns)=>HelpStepResponse)
    createOneHelpStep(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<HelpStepResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'HelpStep', { select: {  } });
      return ctx.prisma.helpStep.create({...args,...select})
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
    @Mutation((returns)=>HelpStepResponse)
    updateOneHelpStep(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<HelpStepResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'HelpStep', { select: {  } });
      return ctx.prisma.helpStep.update({...args,...select})
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