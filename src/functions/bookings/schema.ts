export const schemaPostBooking = {
  type: "object",
  properties: {
    timeslot: { type: 'string' }
  },
  required: ['name']
};

export const schemaDeleteBooking = {
  type: "object",
  properties: {
    timeslot: { type: 'number' },
    email: {type: 'string'}
  },
  required: ['timeslot', 'email']
};
