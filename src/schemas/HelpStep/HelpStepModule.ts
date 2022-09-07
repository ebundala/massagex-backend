import { Module } from '@nestjs/common';
import { HelpStepResolver } from './HelpStepResolvers';

@Module({
  providers: [HelpStepResolver],
})
export class HelpStepModule {}
