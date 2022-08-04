
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Business,
      BusinessResponse,
      BusinessBatchResponse,
      BusinessCountResponse,
      BusinessListResponse,
      AggregateBusinessResponse,
    //  BusinessCreateInput,
    //  BusinessUpdateInput,
     // BusinessUpdateManyMutationInput,
     // BusinessWhereUniqueInput,
     // BusinessWhereInput,
     // BusinessOrderByInput,
     // BusinessScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Business)
      @UseGuards(AuthorizerGuard)
      export class BusinessResolver {
          
         
@Query((returns)=>BusinessResponse)

findUniqueBusiness(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<BusinessResponse|any>{
  const select = ctx.prisma.getSelection(info).valueOf('data', 'Business', { select: {  } });
  return ctx.prisma.business.findUnique({...args,...select})
  .then((data)=>({
    status:true,
    data,
    message:'ok'
  })).catch(({message})=>({
   status:false,
   data:null,
   message:message||'unknown error'
  }))
}
@Query((returns)=>BusinessListResponse)
findManyBusiness(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<BusinessListResponse|any>{
  const select = ctx.prisma.getSelection(info).valueOf('data', 'Business', { select: {  } });
  return ctx.prisma.business.findMany({...args,...select})
  .then((data)=>({
    status:true,
    data:data??[],
    message:'ok'
  })).catch(({message})=>({
   status:false,
   data:[],
   message:message||'unknown error'
  }));
  
}
        }