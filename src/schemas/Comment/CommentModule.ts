
    import { Module } from '@nestjs/common';
    import { CommentResolver } from './CommentResolvers';

    @Module({
      providers:[CommentResolver]
    })
    export class CommentModule{}
    