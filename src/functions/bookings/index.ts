import {schemaDeleteBooking, schemaPostBooking} from './schema';
import { handlerPath } from '@libs/handlerResolver';

export const lambdaPostSlot = {
  handler: `${handlerPath(__dirname)}/handler.postSlot`,
  events: [
    {
      http: {
        method: 'post',
        path: 'bookings',
        request: {
          schema: {
            'application/json': schemaPostBooking
          }
        }
      }
    }
  ]
}

export const lambdaGetSlots = {
  handler: `${handlerPath(__dirname)}/handler.getAllSlots`,
  events: [
    {
      http: {
        method: 'get',
        path: 'bookings',
        request: {
          schema: {
            'application/json': undefined
          }
        }
      }
    }
  ]
}

export const lambdaDeleteSlot = {
  handler: `${handlerPath(__dirname)}/handler.deleteSlot`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'bookings',
        request: {
          schema: {
            'application/json': schemaDeleteBooking
          }
        }
      }
    }
  ]
}
