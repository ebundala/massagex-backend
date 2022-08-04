import { TenantContext } from '@mechsoft/common';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Context, Info, Mutation,
  Resolver
} from '@nestjs/graphql';
import { AuthorizerGuard } from "@mechsoft/enforcer";
import {
  AuthTokenType,
  SignOutResult, User
} from '../../models/graphql';
import { AuthService } from './auth.service';

@Resolver((of) => User)
  @UseGuards(AuthorizerGuard)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
   // private readonly logger: AppLogger
  ) { }
  @Mutation((retuns) => SignOutResult)
  async signout(@Context() ctx:TenantContext,@Args('authTokenType') tokenType: AuthTokenType, @Info() info,): Promise<SignOutResult> {
    return this.authService.signOut(ctx.token,tokenType)
  }
  @Mutation((retuns) => SignOutResult)
  async authenticate(@Context() ctx:TenantContext,@Args('authTokenType') tokenType, @Info() info,): Promise<SignOutResult> {
    const select = ctx.prisma.getSelection(info).valueOf('data', 'User', { select: {  } });
    return this.authService.authenticate(ctx,tokenType,select)
  }
  // @Mutation((returns) => AuthResult)
  // async signup(
  //   @Args('credentials', { type: () => SignupInput }) credentials: SignupInput,   
  //   @Info() info,
  //   @Context() ctx: TenantContext
  // ): Promise<AuthResult> {
    
  //   const {select} = ctx.prisma.getSelection(info).valueOf('data', 'User', { select: {  } });
  //   const result = await this.authService.signup(credentials, ctx.prisma, select,ctx);
  //   //this.setAuth(result.user, ctx);
  //   return result;
  // }

  // @Mutation((returns) => AuthResult)
  // async signin(
  //   @Args('credentials', { type: () => AuthInput }) credentials: AuthInput,
  //   @Info() info,
  //   @Context() ctx: TenantContext
  // ): Promise<AuthResult> {
  //   const {select} = ctx.prisma.getSelection(info).valueOf('data', 'User', { select: {  } });
  //   const result = await this.authService.signInWithEmail(credentials,ctx.prisma,select);
  //   return result;
  // }
  // private setAuth(user, ctx) {
  //   ctx.auth = { uid: user.id, };
  // }

  // @Mutation((returns) => AuthResult)
  // async recoverAccount(@Args('email', { type: () => String }) email,@Context() ctx:TenantContext) {
  //   return this.authService.recoverAccount(email,ctx.prisma);
  // }
  
}


