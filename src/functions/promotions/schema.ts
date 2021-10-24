export const schemaPostPromotion = {
  type: "object",
  properties: {
    discount: { type: 'number' },
    agentName: { type: 'string'},
    expirationDate: { type: 'number'}
  },
  required: ['discount', 'agentName', 'expirationDate']
};