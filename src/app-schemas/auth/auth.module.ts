import { HttpModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';


@Module({
  imports: [HttpModule],
  providers: [AuthResolver, AuthService],
  exports:[AuthService]
})
export class AuthModule { }
