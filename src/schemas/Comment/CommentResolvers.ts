
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Comment,
      CommentResponse,
      CommentBatchResponse,
      CommentCountResponse,
      CommentListResponse,
      AggregateCommentResponse,
    //  CommentCreateInput,
    //  CommentUpdateInput,
     // CommentUpdateManyMutationInput,
     // CommentWhereUniqueInput,
     // CommentWhereInput,
     // CommentOrderByInput,
     // CommentScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Comment)
      @UseGuards(AuthorizerGuard)
      export class CommentResolver {
          
         
    @Query((returns)=>CommentResponse)

    findUniqueComment(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<CommentResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Comment', { select: {  } });
      return ctx.prisma.comment.findUnique({...args,...select})
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
    @Query((returns)=>CommentListResponse)
    findManyComment(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<CommentListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Comment', { select: {  } });
      return ctx.prisma.comment.findMany({...args,...select})
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
    @Mutation((returns)=>CommentResponse)
    createOneComment(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<CommentResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Comment', { select: {  } });
      return ctx.prisma.comment.create({...args,...select})
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
    @Mutation((returns)=>CommentResponse)
    updateOneComment(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<CommentResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Comment', { select: {  } });
      return ctx.prisma.comment.update({...args,...select})
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