
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Tag,
      TagResponse,
      TagBatchResponse,
      TagCountResponse,
      TagListResponse,
      AggregateTagResponse,
    //  TagCreateInput,
    //  TagUpdateInput,
     // TagUpdateManyMutationInput,
     // TagWhereUniqueInput,
     // TagWhereInput,
     // TagOrderByInput,
     // TagScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Tag)
      @UseGuards(AuthorizerGuard)
      export class TagResolver {
          
         
    @Query((returns)=>TagResponse)

    findUniqueTag(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<TagResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Tag', { select: {  } });
      return ctx.prisma.tag.findUnique({...args,...select})
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
    @Query((returns)=>TagListResponse)
    findManyTag(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<TagListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Tag', { select: {  } });
      return ctx.prisma.tag.findMany({...args,...select})
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
    @Mutation((returns)=>TagResponse)
    createOneTag(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<TagResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Tag', { select: {  } });
      return ctx.prisma.tag.create({...args,...select})
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
    @Mutation((returns)=>TagResponse)
    updateOneTag(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<TagResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Tag', { select: {  } });
      return ctx.prisma.tag.update({...args,...select})
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