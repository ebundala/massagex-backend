
    import { Module } from '@nestjs/common';
    import { AnswerResolver } from './AnswerResolvers';

    @Module({
      providers:[AnswerResolver]
    })
    export class AnswerModule{}
    