
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
          
         
        }