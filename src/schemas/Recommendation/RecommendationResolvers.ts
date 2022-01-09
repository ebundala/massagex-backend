
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Recommendation,
      RecommendationResponse,
      RecommendationBatchResponse,
      RecommendationCountResponse,
      RecommendationListResponse,
      AggregateRecommendationResponse,
    //  RecommendationCreateInput,
    //  RecommendationUpdateInput,
     // RecommendationUpdateManyMutationInput,
     // RecommendationWhereUniqueInput,
     // RecommendationWhereInput,
     // RecommendationOrderByInput,
     // RecommendationScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Recommendation)
      @UseGuards(AuthorizerGuard)
      export class RecommendationResolver {
          
         
    @Query((returns)=>RecommendationResponse)

    findUniqueRecommendation(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<RecommendationResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Recommendation', { select: {  } });
      return ctx.prisma.recommendation.findUnique({...args,...select})
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
    @Query((returns)=>RecommendationResponse)
    findFirstRecommendation(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<RecommendationResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Recommendation', { select: {  } });
      return ctx.prisma.recommendation.findFirst({...args,...select})
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
    @Query((returns)=>RecommendationListResponse)
    findManyRecommendation(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<RecommendationListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Recommendation', { select: {  } });
      return ctx.prisma.recommendation.findMany({...args,...select})
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
    @Mutation((returns)=>RecommendationResponse)
    createOneRecommendation(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<RecommendationResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Recommendation', { select: {  } });
      return ctx.prisma.recommendation.create({...args,...select})
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
    @Mutation((returns)=>RecommendationResponse)
    updateOneRecommendation(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<RecommendationResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Recommendation', { select: {  } });
      return ctx.prisma.recommendation.update({...args,...select})
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