
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Comment,
      CommentResponse,
      CommentBatchResponse,
      CommentCountResponse,
      CommentListResponse,
      AggregateCommentResponse,
    //  CommentCreateInput,
    //  CommentUpdateInput,
     // CommentUpdateManyMutationInput,
     // CommentWhereUniqueInput,
     // CommentWhereInput,
     // CommentOrderByInput,
     // CommentScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Comment)
      @UseGuards(AuthorizerGuard)
      export class CommentResolver {
          
         
        }