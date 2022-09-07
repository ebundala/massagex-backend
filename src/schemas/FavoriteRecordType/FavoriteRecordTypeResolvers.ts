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
  FavoriteRecordType,
  FavoriteRecordTypeResponse,
  FavoriteRecordTypeBatchResponse,
  FavoriteRecordTypeCountResponse,
  FavoriteRecordTypeListResponse,
  AggregateFavoriteRecordTypeResponse,
  //  FavoriteRecordTypeCreateInput,
  //  FavoriteRecordTypeUpdateInput,
  // FavoriteRecordTypeUpdateManyMutationInput,
  // FavoriteRecordTypeWhereUniqueInput,
  // FavoriteRecordTypeWhereInput,
  // FavoriteRecordTypeOrderByInput,
  // FavoriteRecordTypeScalarFieldEnum,
  // BatchPayload,
} from '../../models/graphql';
import { PrismaClient } from '@mechsoft/prisma-client';
import { TenantContext } from '@mechsoft/common';
import { AuthorizerGuard } from '@mechsoft/enforcer';

@Resolver((of) => FavoriteRecordType)
@UseGuards(AuthorizerGuard)
export class FavoriteRecordTypeResolver {}
