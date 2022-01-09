
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Answer,
      AnswerResponse,
      AnswerBatchResponse,
      AnswerCountResponse,
      AnswerListResponse,
      AggregateAnswerResponse,
    //  AnswerCreateInput,
    //  AnswerUpdateInput,
     // AnswerUpdateManyMutationInput,
     // AnswerWhereUniqueInput,
     // AnswerWhereInput,
     // AnswerOrderByInput,
     // AnswerScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Answer)
      @UseGuards(AuthorizerGuard)
      export class AnswerResolver {
          
         
    @Query((returns)=>AnswerResponse)

    findUniqueAnswer(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<AnswerResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Answer', { select: {  } });
      return ctx.prisma.answer.findUnique({...args,...select})
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
    @Query((returns)=>AnswerResponse)
    findFirstAnswer(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<AnswerResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Answer', { select: {  } });
      return ctx.prisma.answer.findFirst({...args,...select})
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
    @Query((returns)=>AnswerListResponse)
    findManyAnswer(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<AnswerListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Answer', { select: {  } });
      return ctx.prisma.answer.findMany({...args,...select})
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
    @Mutation((returns)=>AnswerResponse)
    createOneAnswer(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<AnswerResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Answer', { select: {  } });
      return ctx.prisma.answer.create({...args,...select})
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
    @Mutation((returns)=>AnswerResponse)
    updateOneAnswer(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<AnswerResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Answer', { select: {  } });
      return ctx.prisma.answer.update({...args,...select})
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