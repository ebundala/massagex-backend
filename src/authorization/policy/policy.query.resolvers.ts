
import { Resolver, Query,Mutation,Subscription, Info, Args, Context, Parent } from '@nestjs/graphql';
import { TenantContext } from '@mechsoft/common';
import { PolicyService } from './policy.service';
import { AuthorizerGuard } from '@mechsoft/enforcer';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class PolicyQueryResolver {
  constructor(private readonly service: PolicyService) { }
  
@Query()
@UseGuards(AuthorizerGuard)
findUniqueForm(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyForm(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueFormCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyFormCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueForum(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyForum(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueHelp(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyHelp(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniquePaymentMethod(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyPaymentMethod(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueResponse(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyResponse(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueUser(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyUser(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
version(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }

}
