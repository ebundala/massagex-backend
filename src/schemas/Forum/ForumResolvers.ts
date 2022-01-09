
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Forum,
      ForumResponse,
      ForumBatchResponse,
      ForumCountResponse,
      ForumListResponse,
      AggregateForumResponse,
    //  ForumCreateInput,
    //  ForumUpdateInput,
     // ForumUpdateManyMutationInput,
     // ForumWhereUniqueInput,
     // ForumWhereInput,
     // ForumOrderByInput,
     // ForumScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Forum)
      @UseGuards(AuthorizerGuard)
      export class ForumResolver {
          
         
    @Query((returns)=>ForumResponse)

    findUniqueForum(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ForumResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Forum', { select: {  } });
      return ctx.prisma.forum.findUnique({...args,...select})
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
    @Query((returns)=>ForumResponse)
    findFirstForum(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ForumResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Forum', { select: {  } });
      return ctx.prisma.forum.findFirst({...args,...select})
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
    @Query((returns)=>ForumListResponse)
    findManyForum(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ForumListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Forum', { select: {  } });
      return ctx.prisma.forum.findMany({...args,...select})
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
    @Mutation((returns)=>ForumResponse)
    createOneForum(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ForumResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Forum', { select: {  } });
      return ctx.prisma.forum.create({...args,...select})
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
    @Mutation((returns)=>ForumResponse)
    updateOneForum(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ForumResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Forum', { select: {  } });
      return ctx.prisma.forum.update({...args,...select})
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