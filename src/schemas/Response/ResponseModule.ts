
    import { Module } from '@nestjs/common';
    import { ResponseResolver } from './ResponseResolvers';

    @Module({
      providers:[ResponseResolver]
    })
    export class ResponseModule{}
    