import { AppLogger, AppLoggerModule } from '@mechsoft/app-logger';
import { TenantContext } from '@mechsoft/common';
import { FirebaseModule, FirebaseService } from '@mechsoft/firebase-admin';
import { MailModule } from '@mechsoft/mailer';
import { PrismaClient, PrismaClientModule } from '@mechsoft/prisma-client';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  GraphQLRequestContextWillSendResponse,
  GraphQLRequestListener
} from 'apollo-server-plugin-base';
import { AuthModule } from './app-schemas/auth/auth.module';
import { UploadDirective, UploadTypeResolver } from './app-schemas/directives/uploader.directive';
import { CasbinModule, CasbinService } from '@mechsoft/enforcer';
import { BusinessRulesManagerModule,BlocFieldResolverExplorer } from '@mechsoft/business-rules-manager';
import modules from './schemas';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BusinessLogicModule,} from './business-rules/busines.logic.module';
import { PubSubModule } from './pubsub/pubsub.module';
import { SubscriptionModule } from './app-schemas/subscriptions/subscription.module';
import { RedisCache } from './pubsub/redis.service';
import {JSONObjectResolver} from 'graphql-scalars'

import { MpesaTzModule } from './mpesa-tz/mpesa-tz.module';
import { PaymentModule } from './app-schemas/payment/payment.module';
import { FcmRegistrationModule } from './app-schemas/fcm-registration/fcm-registration.module';
import { ThumbnailDirective } from './app-schemas/directives/thumbnail.directive';
import { mergeSchemas } from 'apollo-server-express';
import { GoogleMapModule } from './app-schemas/geolocation/googlemap.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';



const RequestLogger: GraphQLRequestListener<TenantContext> = {

  /*
   didResolveSource?(
     requestContext: GraphQLRequestContextDidResolveSource<TenantContext>,
   ): ValueOrPromise<void>;
   parsingDidStart?(
     requestContext: GraphQLRequestContextParsingDidStart<TenantContext>,
   ): GraphQLRequestListenerParsingDidEnd | void;
   validationDidStart?(
     requestContext: GraphQLRequestContextValidationDidStart<TenantContext>,
   ): GraphQLRequestListenerValidationDidEnd | void;
   didResolveOperation?(
     requestContext: GraphQLRequestContextDidResolveOperation<TenantContext>,
   ): ValueOrPromise<void>;
   didEncounterErrors?(
     requestContext: GraphQLRequestContextDidEncounterErrors<TenantContext>,
   ): ValueOrPromise<void>;*/
  // If this hook is defined, it is invoked immediately before GraphQL execution
  // would take place. If its return value resolves to a non-null
  // GraphQLResponse, that result is used instead of executing the query.
  // Hooks from different plugins are invoked in series and the first non-null
  // response is used.
  // responseForOperation(
  //   requestContext: GraphQLRequestContextResponseForOperation<TenantContext>,
  // ): ValueOrPromise<GraphQLResponse | null> {
  //   ;
  //   console.log('responseForOperation');
  //   return null
  // },
  /*  executionDidStart?(
      requestContext: GraphQLRequestContextExecutionDidStart<TenantContext>,
    ):
      | GraphQLRequestExecutionListener
      | GraphQLRequestListenerExecutionDidEnd
      | void;
  */

  async willSendResponse(
    requestContext: GraphQLRequestContextWillSendResponse<TenantContext>,
  ) {
    const { context, request, response } = requestContext;
    const { tenantId, prisma, logger, auth } = context;

    //await (context.enforcer.getAdapter() as PrismaAdapter).close()
    //  await prisma.$disconnect();
    const time = Date.now() - (context.timestamp ?? Date.now());
    logger?.debug(
      `Request took ${time}/ms to complete for tenantId: ${tenantId}`,
      'RequestLogger'
    );
  },
};

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AppLoggerModule,
    PubSubModule,
    GraphQLModule.forRootAsync({
      imports: [
        FirebaseModule,
        MailModule.forRoot({ apikey: process.env.SENDGRID_API_KEY }),
        PrismaClientModule,
        CasbinModule.forRootAsync({
          model: './src/authorization/rbac_model.conf',
          adapterOptions: {
            log: ['error', 'info', 'query', 'warn']
          }
        }),
        AppLoggerModule,
        AuthModule,
        ...modules,
        BusinessRulesManagerModule,
        BusinessLogicModule,
        SubscriptionModule,
        MpesaTzModule,
        PaymentModule,
        FcmRegistrationModule,
        GoogleMapModule.forRoot()
      ],
      inject: [
        PrismaClient,        
         CasbinService, 
        FirebaseService,AppLogger,RedisCache,RedisPubSub,BlocFieldResolverExplorer,],
      useFactory: (client: PrismaClient,
        enforcer: CasbinService,
        app: FirebaseService,
        logger: AppLogger,
        redisCache: RedisCache,
        redisPubSub:RedisPubSub,
        fieldResolverExplorer: BlocFieldResolverExplorer
        ) => {
          

          return {
          typePaths: [
            './src/schemas/**/*.graphql',
            './src/app-schemas/**/*.graphql',
          ],
         schemaDirectives: {
           file: UploadDirective,
          
         },
       
        //  typeDefs:[
        //    JSONDefinition,
        //  ],
         resolvers: {
           Upload: UploadTypeResolver,
           JSONObject:JSONObjectResolver,
           ...fieldResolverExplorer.exploreResolvers()           
         },
          //  plugins: [/   
          //   {
          //     requestDidStart:(
          //       ctx: GraphQLRequestContext<TenantContext>,
          //     ) =>{

          //       return RequestLogger;
          //     },
          //   },
          //  ],
          // resolverValidationOptions:{
          //   requireResolversForArgs:true
          // },
          //  directiveResolvers:{
          //   thumbnail: {
          //     __resolveType: (args) => {
          //                       debugger
          //     },
          //     resolve: (args) => {
          //       console.log(args)
          //       debugger
          //     },
          //   }
          

          //  },
          
          context: async (data): Promise<TenantContext> => {
            debugger
            const [realm,token]=(data.req?.headers?.authorization??data.connection?.context?.headers?.authorization)?.split(" ")??["",""]
            const auth = await app.app.auth().verifyIdToken(token).catch((e)=>null);            
             if(auth&&auth?.uid){
              logger.debug(await redisCache.get(`last-seen-${auth.uid}`),"Presence");        
              await redisCache.set(`last-seen-${auth.uid}`,(new Date()).toISOString(),"EX",60*60*24*7);
             }
            //TODO: remove this line after test/dev to enable authorization
            enforcer.enableEnforce(false);
           //TODO add rediscache and pubsub to tenant context 
            const ctx: TenantContext = {
              tenantId: null,
              auth: auth,
              token: token,
              enforcer: enforcer,
              prisma: client,
              logger,
              timestamp: Date.now()
            };
            return {...ctx,redisCache,redisPubSub,...fieldResolverExplorer.createDataloaders(null,null,{...ctx,redisCache,redisPubSub,logger},null)};


          },
          subscriptions: {
            onConnect: async (connectionParams,socket,context) => {
              debugger
             //TODO make sure authorization is passed according to ws
            
                const headers = context.request.headers
                logger.debug(connectionParams,"Params")
                logger.debug(headers,"Headers")
              return { headers:{...(connectionParams??{}),...headers}};   

            }
            ,
            onDisconnect: async (webSocket,context)=>{
             // logger.debug(await redisCache.get("lastseen-xxx"),"Presence");
             // await redisCache.set("lastseen-xxx",Date.now());
            }
          },
          
          debug: false,
          uploads: true,
          installSubscriptionHandlers: true,
          playground: true,
         // extensions: []
        };
      }
    }
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'public'),
      exclude: ['/graphql', '/casbin-admin'],

    }),
    
   

  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(PrismaClientMiddleware, EnforcerMiddleware, AuthMiddleware).forRoutes('/graphql');
  }
}
