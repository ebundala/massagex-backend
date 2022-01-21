
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Answer,
      AnswerResponse,
      AnswerBatchResponse,
      AnswerCountResponse,
      AnswerListResponse,
      AggregateAnswerResponse,
    //  AnswerCreateInput,
    //  AnswerUpdateInput,
     // AnswerUpdateManyMutationInput,
     // AnswerWhereUniqueInput,
     // AnswerWhereInput,
     // AnswerOrderByInput,
     // AnswerScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Answer)
      @UseGuards(AuthorizerGuard)
      export class AnswerResolver {
          
         
        }