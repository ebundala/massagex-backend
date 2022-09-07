import { Module } from '@nestjs/common';
import { AbuseRecordTypeResolver } from './AbuseRecordTypeResolvers';

@Module({
  providers: [AbuseRecordTypeResolver],
})
export class AbuseRecordTypeModule {}
