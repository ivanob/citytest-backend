import {schemaPostPromotion} from './schema';
import { handlerPath } from '@libs/handlerResolver';

export const lambdaPostPromotion = {
  handler: `${handlerPath(__dirname)}/handler.postPromotion`,
  events: [
    {
      http: {
        method: 'post',
        path: 'promotions',
        request: {
          schema: {
            'application/json': schemaPostPromotion
          }
        }
      }
    }
  ]
}
