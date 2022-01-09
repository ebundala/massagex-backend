
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Grade,
      GradeResponse,
      GradeBatchResponse,
      GradeCountResponse,
      GradeListResponse,
      AggregateGradeResponse,
    //  GradeCreateInput,
    //  GradeUpdateInput,
     // GradeUpdateManyMutationInput,
     // GradeWhereUniqueInput,
     // GradeWhereInput,
     // GradeOrderByInput,
     // GradeScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Grade)
      @UseGuards(AuthorizerGuard)
      export class GradeResolver {
          
         
    @Query((returns)=>GradeResponse)

    findUniqueGrade(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<GradeResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Grade', { select: {  } });
      return ctx.prisma.grade.findUnique({...args,...select})
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
    @Query((returns)=>GradeResponse)
    findFirstGrade(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<GradeResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Grade', { select: {  } });
      return ctx.prisma.grade.findFirst({...args,...select})
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
    @Query((returns)=>GradeListResponse)
    findManyGrade(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<GradeListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Grade', { select: {  } });
      return ctx.prisma.grade.findMany({...args,...select})
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
    @Mutation((returns)=>GradeResponse)
    createOneGrade(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<GradeResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Grade', { select: {  } });
      return ctx.prisma.grade.create({...args,...select})
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
    @Mutation((returns)=>GradeResponse)
    updateOneGrade(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<GradeResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Grade', { select: {  } });
      return ctx.prisma.grade.update({...args,...select})
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