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
  HelpStep,
  HelpStepResponse,
  HelpStepBatchResponse,
  HelpStepCountResponse,
  HelpStepListResponse,
  AggregateHelpStepResponse,
  //  HelpStepCreateInput,
  //  HelpStepUpdateInput,
  // HelpStepUpdateManyMutationInput,
  // HelpStepWhereUniqueInput,
  // HelpStepWhereInput,
  // HelpStepOrderByInput,
  // HelpStepScalarFieldEnum,
  // BatchPayload,
} from '../../models/graphql';
import { PrismaClient } from '@mechsoft/prisma-client';
import { TenantContext } from '@mechsoft/common';
import { AuthorizerGuard } from '@mechsoft/enforcer';

@Resolver((of) => HelpStep)
@UseGuards(AuthorizerGuard)
export class HelpStepResolver {}
