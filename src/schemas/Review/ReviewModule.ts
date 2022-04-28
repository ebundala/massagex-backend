
    import { Module } from '@nestjs/common';
    import { ReviewResolver } from './ReviewResolvers';

    @Module({
      providers:[ReviewResolver]
    })
    export class ReviewModule{}
    