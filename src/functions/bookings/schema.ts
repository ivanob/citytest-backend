export const schemaPostBooking = {
  type: "object",
  properties: {
    timeslot: { type: 'string' },
    date: { type: 'string' },
    promoCode:  { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    phone: { type: 'string' }
  },
  required: ['timeslot', 'date', 'firstName', 'lastName', 'email', 'phone']
};

export const schemaDeleteBooking = {
  type: "object",
  properties: {
    timeslot: { type: 'number' },
    date: { type: 'string' },
    email: {type: 'string'}
  },
  required: ['timeslot', 'date', 'email']
};
