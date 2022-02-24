
    import { Module } from '@nestjs/common';
    import { TagResolver } from './TagResolvers';

    @Module({
      providers:[TagResolver]
    })
    export class TagModule{}
    