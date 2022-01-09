
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Question,
      QuestionResponse,
      QuestionBatchResponse,
      QuestionCountResponse,
      QuestionListResponse,
      AggregateQuestionResponse,
    //  QuestionCreateInput,
    //  QuestionUpdateInput,
     // QuestionUpdateManyMutationInput,
     // QuestionWhereUniqueInput,
     // QuestionWhereInput,
     // QuestionOrderByInput,
     // QuestionScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Question)
      @UseGuards(AuthorizerGuard)
      export class QuestionResolver {
          
         
    @Query((returns)=>QuestionResponse)

    findUniqueQuestion(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<QuestionResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Question', { select: {  } });
      return ctx.prisma.question.findUnique({...args,...select})
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
    @Query((returns)=>QuestionResponse)
    findFirstQuestion(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<QuestionResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Question', { select: {  } });
      return ctx.prisma.question.findFirst({...args,...select})
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
    @Query((returns)=>QuestionListResponse)
    findManyQuestion(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<QuestionListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Question', { select: {  } });
      return ctx.prisma.question.findMany({...args,...select})
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
    @Mutation((returns)=>QuestionResponse)
    createOneQuestion(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<QuestionResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Question', { select: {  } });
      return ctx.prisma.question.create({...args,...select})
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
    @Mutation((returns)=>QuestionResponse)
    updateOneQuestion(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<QuestionResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Question', { select: {  } });
      return ctx.prisma.question.update({...args,...select})
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