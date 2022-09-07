import { Module } from '@nestjs/common';
import { HelpResolver } from './HelpResolvers';

@Module({
  providers: [HelpResolver],
})
export class HelpModule {}
