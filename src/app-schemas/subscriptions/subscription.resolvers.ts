import { Args, Context, Info, Mutation, Resolver, Subscription } from "@nestjs/graphql";
import { RedisPubSub } from "graphql-redis-subscriptions"
import { TenantContext } from "@mechsoft/common";
import { LOCATION_CHANGED, SubscriptionService } from "./subscription.service";
import { AuthorizerGuard } from "@mechsoft/enforcer";
import { HttpException, UnauthorizedException, UseGuards } from "@nestjs/common";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { LatLon, LocationResponse, OrderWhereUniqueInput } from "src/models/graphql";
import { BusinessStatus, OrderStatus } from "@prisma/client";


@Resolver()
@UseGuards(AuthorizerGuard)
export class SubscriptionResolver {
    constructor(private readonly pubSub: RedisPubSub,
        private readonly bloc: SubscriptionService) { }

  
    //location stream
     @Subscription(() => LocationResponse, {
        filter: async (where: OrderWhereUniqueInput,
            variables, context: TenantContext) => {  
                      
            const { auth, prisma } = context
            if(!auth.uid)
            return false;
            const uid = auth.uid;
            const order = await prisma.order.findUnique({where:where,select:{
                ownerId:true,
                orderStatus:true,
                business:{
                    select:{
                        ownerId:true,
                        status:true,
                        mode: true,
                    }
                }
            }});
            const isOnline = order.business.status == BusinessStatus.ONLINE;
            const orderIsActive = order.orderStatus == OrderStatus.ACCEPTED;
            const isPerticipant = order.ownerId != uid || order.business.ownerId == uid;

            return isPerticipant&&isOnline&&orderIsActive;
        },
        resolve: async function (this: SubscriptionResolver, where: OrderWhereUniqueInput, args: any, context: TenantContext, info: any): Promise<LocationResponse | {}> {
          
            

            const latlon = await this.bloc.getLocation(where.id,context,info);
            if (latlon) {
             
                return {
                    message: "ok",
                    status: true,
                    data: latlon,
                }
            }
            return {
                message: "No location data found",
                status: false,

            }
        }

    })
    locations(@Args("where") args: OrderWhereUniqueInput, @Context() context: TenantContext, @Info() info) {
        if (context.auth?.uid) {
            return this.pubSub.asyncIterator(LOCATION_CHANGED, { args, context, info });
        }
        throw new UnauthorizedException()
    } 

  

}




 /*  @Subscription(() => OrderResponse, {
        filter: async (where: OrderWhereUniqueInput,
            variables, context: TenantContext) => {

            
            const { prisma, auth } = context;
            const order = await prisma.order.findUnique({
                where, select: {
                    owner: {
                        select: { id: true }
                    },
                    provider: {
                        select: { id: true }
                    },
                    organization: {
                        select: {
                            owner:
                            {
                                select: { id: true }

                            }
                        }
                    }
                }
            });
            return [order.organization.owner.id, order.owner.id, order.provider.id].includes(auth.uid);
        },
        resolve: (payload: OrderWhereUniqueInput, args: any, context: TenantContext, info: any) => {

            const { select } = context.prisma.getSelection(info).valueOf('data', 'Order', { select: {} });
            return context.prisma.order.findUnique({ where: payload, select })
                .then<OrderResponse, OrderResponse>((order) => ({
                    status: true,
                    message: "ok",
                    data: order as Order
                })).catch<OrderResponse>(({ message }) => ({
                    status: false,
                    message,
                }));
        }

    })
    orders(@Args("where") args, @Context() context: TenantContext, @Info() info) {
        
        if (context.auth?.uid) {
            return this.pubSub.asyncIterator(`${ORDER_CHANGED}`, { args, context, info });
        }
        throw new UnauthorizedException()
    } */


   /*  @Subscription(() => InviteResponse,
        {
            filter: async (where: InviteWhereUniqueInput,
                variables,context: TenantContext) =>{
                    const {auth,prisma} = context;
                  const invite = await prisma.invite.findUnique({where,
                select:{
                    inviteeId:true
                }})
                return invite.inviteeId == auth.id;
            },
            resolve: (payload: InviteWhereUniqueInput, args: any, context: TenantContext, info: any) => {
                const { select } = context.prisma.getSelection(info).valueOf('data', 'Invite', { select: {} });

                return context.prisma.invite.findUnique({ where: payload, select })
                    .then<InviteResponse, InviteResponse>((invite) => ({
                        status: true,
                        message: "ok",
                        data: invite as Invite
                    })).catch<InviteResponse>(({ message }) => ({
                        status: false,
                        message,
                    }));
            }
        })
    invites(@Args() args, @Context() context: TenantContext, @Info() info) {
        if (context.auth?.uid) {
            return this.pubSub.asyncIterator(`${INVITE_RECEIVED}`, { args, context, info });
        }
        throw new UnauthorizedException()
    } */



  /*   @Subscription(() => RatingResponse,
        {
            filter: async (where: RatingWhereUniqueInput,
                variables,context: TenantContext) =>{
                    const {auth,prisma} = context;
                 const order= await prisma.rating.findUnique({where,select:{
                      ownerId:true,  
                                          
                      organization:{
                          select:{
                              ownerId:true
                          }
                      }
                  }});
                return order.organization.ownerId ==auth.id;
            },
            resolve: (payload: RatingWhereUniqueInput, args: any, context: TenantContext, info: any) => {
                const { select } = context.prisma.getSelection(info).valueOf('data', 'Rating', { select: {} });

                return context.prisma.rating.findUnique({ where: payload, select })
                    .then<RatingResponse, RatingResponse>((rating) => ({
                        status: true,
                        message: "ok",
                        data: rating as Rating
                    })).catch<RatingResponse>(({ message }) => ({
                        status: false,
                        message,
                    }));
            }
        })
    ratings(@Args() args, @Context() context: TenantContext, @Info() info) {
        if (context.auth?.uid) {
            return this.pubSub.asyncIterator(`${FEEDBACK_RECEIVED}`, { args, context, info });
        }
        throw new UnauthorizedException()
    } */
