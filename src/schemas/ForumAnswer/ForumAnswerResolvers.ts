
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      ForumAnswer,
      ForumAnswerResponse,
      ForumAnswerBatchResponse,
      ForumAnswerCountResponse,
      ForumAnswerListResponse,
      AggregateForumAnswerResponse,
    //  ForumAnswerCreateInput,
    //  ForumAnswerUpdateInput,
     // ForumAnswerUpdateManyMutationInput,
     // ForumAnswerWhereUniqueInput,
     // ForumAnswerWhereInput,
     // ForumAnswerOrderByInput,
     // ForumAnswerScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>ForumAnswer)
      @UseGuards(AuthorizerGuard)
      export class ForumAnswerResolver {
          
         
    @Query((returns)=>ForumAnswerResponse)

    findUniqueForumAnswer(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ForumAnswerResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'ForumAnswer', { select: {  } });
      return ctx.prisma.forumAnswer.findUnique({...args,...select})
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
    @Query((returns)=>ForumAnswerResponse)
    findFirstForumAnswer(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ForumAnswerResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'ForumAnswer', { select: {  } });
      return ctx.prisma.forumAnswer.findFirst({...args,...select})
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
    @Query((returns)=>ForumAnswerListResponse)
    findManyForumAnswer(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ForumAnswerListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'ForumAnswer', { select: {  } });
      return ctx.prisma.forumAnswer.findMany({...args,...select})
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
    @Mutation((returns)=>ForumAnswerResponse)
    createOneForumAnswer(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ForumAnswerResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'ForumAnswer', { select: {  } });
      return ctx.prisma.forumAnswer.create({...args,...select})
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
    @Mutation((returns)=>ForumAnswerResponse)
    updateOneForumAnswer(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ForumAnswerResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'ForumAnswer', { select: {  } });
      return ctx.prisma.forumAnswer.update({...args,...select})
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