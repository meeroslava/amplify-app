// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Reservation, Room, Hotel, Client } = initSchema(schema);

export {
  Reservation,
  Room,
  Hotel,
  Client
};