
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Service,
      ServiceResponse,
      ServiceBatchResponse,
      ServiceCountResponse,
      ServiceListResponse,
      AggregateServiceResponse,
    //  ServiceCreateInput,
    //  ServiceUpdateInput,
     // ServiceUpdateManyMutationInput,
     // ServiceWhereUniqueInput,
     // ServiceWhereInput,
     // ServiceOrderByInput,
     // ServiceScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Service)
      @UseGuards(AuthorizerGuard)
      export class ServiceResolver {
          
         
        }