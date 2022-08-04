
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
          
         
        }