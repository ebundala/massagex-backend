
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Response,
      ResponseResponse,
      ResponseBatchResponse,
      ResponseCountResponse,
      ResponseListResponse,
      AggregateResponseResponse,
    //  ResponseCreateInput,
    //  ResponseUpdateInput,
     // ResponseUpdateManyMutationInput,
     // ResponseWhereUniqueInput,
     // ResponseWhereInput,
     // ResponseOrderByInput,
     // ResponseScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Response)
      @UseGuards(AuthorizerGuard)
      export class ResponseResolver {
          
         
    @Query((returns)=>ResponseResponse)

    findUniqueResponse(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ResponseResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Response', { select: {  } });
      return ctx.prisma.response.findUnique({...args,...select})
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
    @Query((returns)=>ResponseListResponse)
    findManyResponse(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ResponseListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Response', { select: {  } });
      return ctx.prisma.response.findMany({...args,...select})
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
    @Mutation((returns)=>ResponseResponse)
    createOneResponse(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ResponseResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Response', { select: {  } });
      return ctx.prisma.response.create({...args,...select})
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
    @Mutation((returns)=>ResponseResponse)
    updateOneResponse(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ResponseResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Response', { select: {  } });
      return ctx.prisma.response.update({...args,...select})
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