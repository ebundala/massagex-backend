/**
 *
 * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
 *
 */
import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Mutation,
  Query,
  Info,
  Args,
  Context,
  Parent,
} from '@nestjs/graphql';
import {
  Order,
  OrderResponse,
  OrderBatchResponse,
  OrderCountResponse,
  OrderListResponse,
  AggregateOrderResponse,
  //  OrderCreateInput,
  //  OrderUpdateInput,
  // OrderUpdateManyMutationInput,
  // OrderWhereUniqueInput,
  // OrderWhereInput,
  // OrderOrderByInput,
  // OrderScalarFieldEnum,
  // BatchPayload,
} from '../../models/graphql';
import { PrismaClient } from '@mechsoft/prisma-client';
import { TenantContext } from '@mechsoft/common';
import { AuthorizerGuard } from '@mechsoft/enforcer';

@Resolver((of) => Order)
@UseGuards(AuthorizerGuard)
export class OrderResolver {}
