
    import { Module } from '@nestjs/common';
    import { BusinessProfileResolver } from './BusinessProfileResolvers';

    @Module({
      providers:[BusinessProfileResolver]
    })
    export class BusinessProfileModule{}
    