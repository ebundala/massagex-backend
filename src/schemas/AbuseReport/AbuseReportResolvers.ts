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
  AbuseReport,
  AbuseReportResponse,
  AbuseReportBatchResponse,
  AbuseReportCountResponse,
  AbuseReportListResponse,
  AggregateAbuseReportResponse,
  //  AbuseReportCreateInput,
  //  AbuseReportUpdateInput,
  // AbuseReportUpdateManyMutationInput,
  // AbuseReportWhereUniqueInput,
  // AbuseReportWhereInput,
  // AbuseReportOrderByInput,
  // AbuseReportScalarFieldEnum,
  // BatchPayload,
} from '../../models/graphql';
import { PrismaClient } from '@mechsoft/prisma-client';
import { TenantContext } from '@mechsoft/common';
import { AuthorizerGuard } from '@mechsoft/enforcer';

@Resolver((of) => AbuseReport)
@UseGuards(AuthorizerGuard)
export class AbuseReportResolver {}
