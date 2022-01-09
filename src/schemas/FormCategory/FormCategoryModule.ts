
    import { Module } from '@nestjs/common';
    import { FormCategoryResolver } from './FormCategoryResolvers';

    @Module({
      providers:[FormCategoryResolver]
    })
    export class FormCategoryModule{}
    