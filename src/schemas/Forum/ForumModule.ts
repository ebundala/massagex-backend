
    import { Module } from '@nestjs/common';
    import { ForumResolver } from './ForumResolvers';

    @Module({
      providers:[ForumResolver]
    })
    export class ForumModule{}
    