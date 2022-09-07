import { TenantContext } from '@mechsoft/common';
import { UseGuards } from '@nestjs/common';
import { Args, Context, Info, Mutation, Resolver } from '@nestjs/graphql';
import { AuthorizerGuard } from '@mechsoft/enforcer';
import { User } from '../../models/graphql';
import { AuthService } from './auth.service';
import { AppLogger } from '@mechsoft/app-logger';

@Resolver((of) => User)
@UseGuards(AuthorizerGuard)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //private readonly logger: AppLogger
  ) {}

  @Mutation((retuns) => Object)
  async notifyUserSignup(
    @Context() ctx: TenantContext,
    @Args('token') token: string,
    @Args('data') data,
    @Info() info,
  ): Promise<Object> {
    return this.authService.notifyUserSignup(ctx, data, token);
  }
  @Mutation((retuns) => Object)
  async getUserClaims(
    @Context() ctx: TenantContext,
    @Args('uid') uid: string,
    @Args('token') token: string,
    @Info() info,
  ): Promise<Object> {
    return this.authService.getUserClaims(ctx, uid, token);
  }
}
