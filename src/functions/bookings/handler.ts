import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
// import { middyfy } from '@libs/lambda';

import {
  schemaPostBooking,
  schemaDeleteBooking
} from './schema';

export const postSlot: ValidatedEventAPIGatewayProxyEvent<typeof schemaPostBooking> = async (event) => {
  return formatJSONResponse({
    message: `Hello ${event.body}, welcome to the exciting Serverless world!`,
    event,
  });
}

export const getAllSlots: ValidatedEventAPIGatewayProxyEvent<void> = async (event) => {
  const date = event.queryStringParameters.date;
  return formatJSONResponse({
    message: 'Reach getListAvailableSlots',
    date
  });
}

export const deleteSlot: ValidatedEventAPIGatewayProxyEvent<typeof schemaDeleteBooking> = async (event) => {
  return formatJSONResponse({
    message: 'Reach deleteSlot',
    event
  });
}
