
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Form,
      FormResponse,
      FormBatchResponse,
      FormCountResponse,
      FormListResponse,
      AggregateFormResponse,
    //  FormCreateInput,
    //  FormUpdateInput,
     // FormUpdateManyMutationInput,
     // FormWhereUniqueInput,
     // FormWhereInput,
     // FormOrderByInput,
     // FormScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Form)
      @UseGuards(AuthorizerGuard)
      export class FormResolver {
          
         
    @Query((returns)=>FormResponse)

    findUniqueForm(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<FormResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Form', { select: {  } });
      return ctx.prisma.form.findUnique({...args,...select})
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
    @Query((returns)=>FormResponse)
    findFirstForm(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<FormResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Form', { select: {  } });
      return ctx.prisma.form.findFirst({...args,...select})
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
    @Query((returns)=>FormListResponse)
    findManyForm(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<FormListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Form', { select: {  } });
      return ctx.prisma.form.findMany({...args,...select})
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
    @Mutation((returns)=>FormResponse)
    createOneForm(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<FormResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Form', { select: {  } });
      return ctx.prisma.form.create({...args,...select})
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
    @Mutation((returns)=>FormResponse)
    updateOneForm(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<FormResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Form', { select: {  } });
      return ctx.prisma.form.update({...args,...select})
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