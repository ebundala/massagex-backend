
    import { Module } from '@nestjs/common';
    import { FormResolver } from './FormResolvers';

    @Module({
      providers:[FormResolver]
    })
    export class FormModule{}
    