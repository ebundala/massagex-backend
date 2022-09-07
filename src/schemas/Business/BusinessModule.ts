import { Module } from '@nestjs/common';
import { BusinessResolver } from './BusinessResolvers';

@Module({
  providers: [BusinessResolver],
})
export class BusinessModule {}
