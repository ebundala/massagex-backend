
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Review,
      ReviewResponse,
      ReviewBatchResponse,
      ReviewCountResponse,
      ReviewListResponse,
      AggregateReviewResponse,
    //  ReviewCreateInput,
    //  ReviewUpdateInput,
     // ReviewUpdateManyMutationInput,
     // ReviewWhereUniqueInput,
     // ReviewWhereInput,
     // ReviewOrderByInput,
     // ReviewScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Review)
      @UseGuards(AuthorizerGuard)
      export class ReviewResolver {
          
         
    @Query((returns)=>ReviewListResponse)
    findManyReview(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ReviewListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Review', { select: {  } });
      return ctx.prisma.review.findMany({...args,...select})
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
        }