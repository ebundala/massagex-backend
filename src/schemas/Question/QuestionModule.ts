
    import { Module } from '@nestjs/common';
    import { QuestionResolver } from './QuestionResolvers';

    @Module({
      providers:[QuestionResolver]
    })
    export class QuestionModule{}
    