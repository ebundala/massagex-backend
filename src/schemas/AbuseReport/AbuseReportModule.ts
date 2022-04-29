
    import { Module } from '@nestjs/common';
    import { AbuseReportResolver } from './AbuseReportResolvers';

    @Module({
      providers:[AbuseReportResolver]
    })
    export class AbuseReportModule{}
    