
    import { Module } from '@nestjs/common';
    import { ForumAnswerResolver } from './ForumAnswerResolvers';

    @Module({
      providers:[ForumAnswerResolver]
    })
    export class ForumAnswerModule{}
    