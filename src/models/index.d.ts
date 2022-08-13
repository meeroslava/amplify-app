import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ReservationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HotelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Reservation {
  readonly id: string;
  readonly dateIn: number;
  readonly dateOut: number;
  readonly Room?: Room | null;
  readonly Client?: Client | null;
  readonly Hotel?: Hotel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reservationRoomId?: string | null;
  readonly reservationClientId?: string | null;
  readonly reservationHotelId?: string | null;
  constructor(init: ModelInit<Reservation, ReservationMetaData>);
  static copyOf(source: Reservation, mutator: (draft: MutableModel<Reservation, ReservationMetaData>) => MutableModel<Reservation, ReservationMetaData> | void): Reservation;
}

export declare class Room {
  readonly id: string;
  readonly type: string;
  readonly amount: number;
  readonly Hotel?: Hotel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly roomHotelId?: string | null;
  constructor(init: ModelInit<Room, RoomMetaData>);
  static copyOf(source: Room, mutator: (draft: MutableModel<Room, RoomMetaData>) => MutableModel<Room, RoomMetaData> | void): Room;
}

export declare class Hotel {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly picture: string;
  readonly searchName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Hotel, HotelMetaData>);
  static copyOf(source: Hotel, mutator: (draft: MutableModel<Hotel, HotelMetaData>) => MutableModel<Hotel, HotelMetaData> | void): Hotel;
}

export declare class Client {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Client, ClientMetaData>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client, ClientMetaData>) => MutableModel<Client, ClientMetaData> | void): Client;
}