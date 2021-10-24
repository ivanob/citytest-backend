import type { AWS } from '@serverless/typescript';
import {
  lambdaDeleteSlot,
  lambdaPostSlot,
  lambdaGetSlots
} from '@functions/bookings';
import {
  lambdaPostPromotion
} from '@functions/promotions';

import dynamoDbTables from './dynamodb-tables';

const serverlessConfiguration: AWS = {
  service: 'citytest-backend',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    region: '${opt:region, self:provider.region}',
    stage: '${opt:stage, self:provider.stage}',
    bookings_table: '${self:service}-bookings-table-${opt:stage, self:provider.stage}',
    rooms_table: '${self:service}-rooms-table-${opt:stage, self:provider.stage}',
    promotions_table: '${self:service}-promotions-table-${opt:stage, self:provider.stage}',
    table_throughputs: {
      prod: 5,
      default: 1,
    },
    table_throughput: '${self:custom.TABLE_THROUGHPUTS.${self:custom.stage}, self:custom.table_throughputs.default}',
    dynamodb: {
      stages: ['dev'],
      start: {
        port: 8008,
        inMemory: true,
        heapInitial: '200m',
        heapMax: '1g',
        migrate: true,
        seed: true,
        convertEmptyValues: true,
        // Uncomment only if you already have a DynamoDB running locally
        // noStart: true
      }
    },
    ['serverless-offline']: {
      httpPort: 3000,
      babelOptions: {
        presets: ["env"]
      }
    }
  },
  plugins: ['serverless-webpack'],
  package: {
    individually: true,
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'eu-west-1',
    apiGateway: {
      minimumCompressionSize: 128,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      REGION: '${self:custom.region}',
      STAGE: '${self:custom.stage}',
      BOOKINGS_TABLE: '${self:custom.bookings_table}',
      ROOMS_TABLE: '${self:custom.rooms_table}',
      PROMOTIONS_TABLE: '${self:custom.promotions_table}',
    },
    lambdaHashingVersion: '20201221',
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
            'dynamodb:DescribeTable',
            'dynamodb:Query',
            'dynamodb:Scan',
            'dynamodb:GetItem',
            'dynamodb:PutItem',
            'dynamodb:UpdateItem',
            'dynamodb:DeleteItem'
        ],
        Resource: [
          {"Fn::GetAtt": [ 'BookingsTable', 'Arn' ]}
        ]
      }
    ]
  },
  // import the function via paths
  functions: { lambdaDeleteSlot, lambdaPostSlot, lambdaGetSlots, lambdaPostPromotion },
  resources: {
    Resources: dynamoDbTables
  }
};

module.exports = serverlessConfiguration;
