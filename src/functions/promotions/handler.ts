import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
// import { middyfy } from '@libs/lambda';

import {
  schemaPostPromotion
} from './schema';

export const postPromotion: ValidatedEventAPIGatewayProxyEvent<typeof schemaPostPromotion> = async (event) => {
  return formatJSONResponse({
    message: `Hit postPromotion`,
    event,
  });
}
