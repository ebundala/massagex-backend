import { Module } from '@nestjs/common';
import { FavoriteRecordTypeResolver } from './FavoriteRecordTypeResolvers';

@Module({
  providers: [FavoriteRecordTypeResolver],
})
export class FavoriteRecordTypeModule {}
