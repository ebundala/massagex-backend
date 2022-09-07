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
  Category,
  CategoryResponse,
  CategoryBatchResponse,
  CategoryCountResponse,
  CategoryListResponse,
  AggregateCategoryResponse,
  //  CategoryCreateInput,
  //  CategoryUpdateInput,
  // CategoryUpdateManyMutationInput,
  // CategoryWhereUniqueInput,
  // CategoryWhereInput,
  // CategoryOrderByInput,
  // CategoryScalarFieldEnum,
  // BatchPayload,
} from '../../models/graphql';
import { PrismaClient } from '@mechsoft/prisma-client';
import { TenantContext } from '@mechsoft/common';
import { AuthorizerGuard } from '@mechsoft/enforcer';

@Resolver((of) => Category)
@UseGuards(AuthorizerGuard)
export class CategoryResolver {
  @Query((returns) => CategoryListResponse)
  findManyCategory(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ): Promise<CategoryListResponse | any> {
    const select = ctx.prisma
      .getSelection(info)
      .valueOf('data', 'Category', { select: {} });
    return ctx.prisma.category
      .findMany({ ...args, ...select })
      .then((data) => ({
        status: true,
        data: data ?? [],
        message: 'ok',
      }))
      .catch(({ message }) => ({
        status: false,
        data: [],
        message: message || 'unknown error',
      }));
  }
}
