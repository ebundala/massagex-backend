
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
          
         
        }