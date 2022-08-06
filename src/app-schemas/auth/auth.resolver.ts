import { TenantContext } from '@mechsoft/common';
import { UseGuards } from '@nestjs/common';
import {
  Context, Info, Mutation,
  Resolver
} from '@nestjs/graphql';
import { AuthorizerGuard } from "@mechsoft/enforcer";
import {
  User
} from '../../models/graphql';
import { AuthService } from './auth.service';
import { AppLogger } from '@mechsoft/app-logger';

@Resolver((of) => User)
@UseGuards(AuthorizerGuard)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
   //private readonly logger: AppLogger
  ) { }
  
  @Mutation((retuns) => Object)
  async notifyUserSignup(@Context() ctx:TenantContext, @Info() info,): Promise<Object> {
    return this.authService.notifyUserSignup(ctx)
  }
  @Mutation((retuns) => Object)
  async getUserRoles(@Context() ctx:TenantContext, @Info() info,): Promise<Object> {
    return this.authService.getUserRoles(ctx)
  }
  
  
}


