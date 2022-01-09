
    import { Module } from '@nestjs/common';
    import { RecommendationResolver } from './RecommendationResolvers';

    @Module({
      providers:[RecommendationResolver]
    })
    export class RecommendationModule{}
    