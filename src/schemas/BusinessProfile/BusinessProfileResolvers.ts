
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      BusinessProfile,
      BusinessProfileResponse,
      BusinessProfileBatchResponse,
      BusinessProfileCountResponse,
      BusinessProfileListResponse,
      AggregateBusinessProfileResponse,
    //  BusinessProfileCreateInput,
    //  BusinessProfileUpdateInput,
     // BusinessProfileUpdateManyMutationInput,
     // BusinessProfileWhereUniqueInput,
     // BusinessProfileWhereInput,
     // BusinessProfileOrderByInput,
     // BusinessProfileScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>BusinessProfile)
      @UseGuards(AuthorizerGuard)
      export class BusinessProfileResolver {
          
         
        }