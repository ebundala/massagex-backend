import { Module } from '@nestjs/common';
import { CategoryResolver } from './CategoryResolvers';

@Module({
  providers: [CategoryResolver],
})
export class CategoryModule {}
