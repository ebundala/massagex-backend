
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      ForumAnswer,
      ForumAnswerResponse,
      ForumAnswerBatchResponse,
      ForumAnswerCountResponse,
      ForumAnswerListResponse,
      AggregateForumAnswerResponse,
    //  ForumAnswerCreateInput,
    //  ForumAnswerUpdateInput,
     // ForumAnswerUpdateManyMutationInput,
     // ForumAnswerWhereUniqueInput,
     // ForumAnswerWhereInput,
     // ForumAnswerOrderByInput,
     // ForumAnswerScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>ForumAnswer)
      @UseGuards(AuthorizerGuard)
      export class ForumAnswerResolver {
          
         
        }