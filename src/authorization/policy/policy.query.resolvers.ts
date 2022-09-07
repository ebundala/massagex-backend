import {
  Resolver,
  Query,
  Mutation,
  Subscription,
  Info,
  Args,
  Context,
  Parent,
} from '@nestjs/graphql';
import { TenantContext } from '@mechsoft/common';
import { PolicyService } from './policy.service';
import { AuthorizerGuard } from '@mechsoft/enforcer';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class PolicyQueryResolver {
  constructor(private readonly service: PolicyService) {}

  @Query()
  @UseGuards(AuthorizerGuard)
  route(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  geocode(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  reverseGeocode(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  placesAutocomplete(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  findManyBusiness(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  findManyCategory(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  findManyComment(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  findUniqueHelp(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  findManyHelp(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  findManyPaymentMethod(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  findManyReview(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  findUniqueUser(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  findManyUser(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }

  @Query()
  @UseGuards(AuthorizerGuard)
  version(
    @Parent() parent,
    @Args() args,
    @Context() ctx: TenantContext,
    @Info() info,
  ) {
    return this.service.handle(parent, args, ctx, info);
  }
}
