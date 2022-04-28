import { SdlGeneratorServiceOptions, writeSchemaToFile,createPolicySchema} from '@mechsoft/apigen';
import { join } from 'path';
import { Upload, UploadDirective, UploadTypeResolver } from './app-schemas/directives/uploader.directive';
import {JSONObjectResolver} from 'graphql-scalars'
import { ThumbnailDirective } from './app-schemas/directives/thumbnail.directive';

const options: SdlGeneratorServiceOptions = {
  schemaPath: './prisma/schema.prisma',

  customOptions: {
    onDelete: true,
    genTypes: true,

    // excludeFields: ['Id'],
    excludeQueriesAndMutationsByModel: {
      // 'User': ['upsertOne', 'deleteMany'],
      // 'Invite':['findFirst','upsertOne'],
      'PaymentMethod':['findFirst','upsertOne'],
      // 'SelcomDisbursement':['findFirst','upsertOne'],
      // 'SelcomPayment':['findFirst','upsertOne',],
      // 'SelcomPayment':['findFirst','upsertOne'],
      // 'SelcomPayment':['findFirst','upsertOne'],
    },
    excludeQueriesAndMutations: [
      'upsertOne', 'aggregate', 'deleteMany', 'updateMany', 'findCount','deleteOne','findFirst'
    ],
    
    excludeModels: [
      {
        name: 'CasbinRule',
        queries: true,
        mutations: true,
      },
      {
        name: 'BusinessProfile',
        queries: true,
        mutations: true,
      },
      
      
      {
        name: 'HelpStep',
        queries: true,
        mutations: true,
      },
      
     
      {
        name: 'Location',
        queries: true,
        mutations: true,
      },
      {
        name: 'Attachment',
        queries: true,
        mutations: true,
      },
      {
        name: 'Transaction',
        queries: true,
        mutations: true,
      },
      {
        name: 'MpesaPayment',
        queries: true,
        mutations: true,
      },
      {
        name: 'SelcomDisbursement',
        queries: true,
        mutations: true,
      },
      {
        name: 'SelcomPayment',
        queries: true,
        mutations: true,
      },
      {
        name: 'SelcomPayment',
        queries: true,
        mutations: true,
      },
      // {
      //   name: 'PaymentMethod',
      //   queries: false,
      //   mutations: true,
      // },
      {
        name: 'Device',
        queries: true,
        mutations: true,
      },
    ],
    output: './src/schemas',
  },

  sdlOptions: {
    typePaths: ['./src/schemas/**/*.graphql','./src/app-schemas/**/*.graphql'],
    definitions: {
      path: 'src/models/graphql.ts',
        outputAs: 'class',
        customScalarTypeMapping: {
            Upload: 'Promise < FileUpload >',
            DateTime: 'string'
        },
      additionalHeader: "import { FileUpload } from 'graphql-upload';"
    },
    transformSchema: (schema) => {
      const path = join(process.cwd(), 'src/models')
     const filePath= writeSchemaToFile(schema, path);
      //TODO: generate policy schema
      createPolicySchema('src/authorization/policy', filePath);
      return schema;
    },
    debug: true,
   // uploads: true,
    //playground: false,
    schemaDirectives: {
      file: UploadDirective,
      //thumbnail:ThumbnailDirective
    },
    resolvers: {
      Upload: UploadTypeResolver,
      JSONObject:JSONObjectResolver
    },
    sortSchema: true,
  }
};
export default options;
