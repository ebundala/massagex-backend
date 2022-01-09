
    import { Module } from '@nestjs/common';
    import { GradeResolver } from './GradeResolvers';

    @Module({
      providers:[GradeResolver]
    })
    export class GradeModule{}
    