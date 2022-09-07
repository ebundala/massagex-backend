import { Module } from '@nestjs/common';
import { AuthModule } from 'src/app-schemas/auth/auth.module';
import { PubSubModule } from 'src/pubsub/pubsub.module';
import { RedisCache } from 'src/pubsub/redis.service';
import { BusinessLogicService } from './bloc/business.logic.service';

@Module({
  imports: [AuthModule, PubSubModule],
  providers: [BusinessLogicService],
})
export class BusinessLogicModule {
  constructor(private readonly bloc: BusinessLogicService) {}
}
