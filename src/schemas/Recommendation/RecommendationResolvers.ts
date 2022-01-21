
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
          
         
        }