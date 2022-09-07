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
  Favorite,
  FavoriteResponse,
  FavoriteBatchResponse,
  FavoriteCountResponse,
  FavoriteListResponse,
  AggregateFavoriteResponse,
  //  FavoriteCreateInput,
  //  FavoriteUpdateInput,
  // FavoriteUpdateManyMutationInput,
  // FavoriteWhereUniqueInput,
  // FavoriteWhereInput,
  // FavoriteOrderByInput,
  // FavoriteScalarFieldEnum,
  // BatchPayload,
} from '../../models/graphql';
import { PrismaClient } from '@mechsoft/prisma-client';
import { TenantContext } from '@mechsoft/common';
import { AuthorizerGuard } from '@mechsoft/enforcer';

@Resolver((of) => Favorite)
@UseGuards(AuthorizerGuard)
export class FavoriteResolver {}
