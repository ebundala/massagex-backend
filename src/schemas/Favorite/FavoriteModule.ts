
    import { Module } from '@nestjs/common';
    import { FavoriteResolver } from './FavoriteResolvers';

    @Module({
      providers:[FavoriteResolver]
    })
    export class FavoriteModule{}
    