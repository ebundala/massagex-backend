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
  AbuseRecordType,
  AbuseRecordTypeResponse,
  AbuseRecordTypeBatchResponse,
  AbuseRecordTypeCountResponse,
  AbuseRecordTypeListResponse,
  AggregateAbuseRecordTypeResponse,
  //  AbuseRecordTypeCreateInput,
  //  AbuseRecordTypeUpdateInput,
  // AbuseRecordTypeUpdateManyMutationInput,
  // AbuseRecordTypeWhereUniqueInput,
  // AbuseRecordTypeWhereInput,
  // AbuseRecordTypeOrderByInput,
  // AbuseRecordTypeScalarFieldEnum,
  // BatchPayload,
} from '../../models/graphql';
import { PrismaClient } from '@mechsoft/prisma-client';
import { TenantContext } from '@mechsoft/common';
import { AuthorizerGuard } from '@mechsoft/enforcer';

@Resolver((of) => AbuseRecordType)
@UseGuards(AuthorizerGuard)
export class AbuseRecordTypeResolver {}
