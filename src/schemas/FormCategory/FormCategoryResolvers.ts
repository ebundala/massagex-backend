
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      FormCategory,
      FormCategoryResponse,
      FormCategoryBatchResponse,
      FormCategoryCountResponse,
      FormCategoryListResponse,
      AggregateFormCategoryResponse,
    //  FormCategoryCreateInput,
    //  FormCategoryUpdateInput,
     // FormCategoryUpdateManyMutationInput,
     // FormCategoryWhereUniqueInput,
     // FormCategoryWhereInput,
     // FormCategoryOrderByInput,
     // FormCategoryScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>FormCategory)
      @UseGuards(AuthorizerGuard)
      export class FormCategoryResolver {
          
         
    @Query((returns)=>FormCategoryResponse)

    findUniqueFormCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<FormCategoryResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'FormCategory', { select: {  } });
      return ctx.prisma.formCategory.findUnique({...args,...select})
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
    @Query((returns)=>FormCategoryResponse)
    findFirstFormCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<FormCategoryResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'FormCategory', { select: {  } });
      return ctx.prisma.formCategory.findFirst({...args,...select})
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
    @Query((returns)=>FormCategoryListResponse)
    findManyFormCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<FormCategoryListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'FormCategory', { select: {  } });
      return ctx.prisma.formCategory.findMany({...args,...select})
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
    @Mutation((returns)=>FormCategoryResponse)
    createOneFormCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<FormCategoryResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'FormCategory', { select: {  } });
      return ctx.prisma.formCategory.create({...args,...select})
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
    @Mutation((returns)=>FormCategoryResponse)
    updateOneFormCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<FormCategoryResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'FormCategory', { select: {  } });
      return ctx.prisma.formCategory.update({...args,...select})
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