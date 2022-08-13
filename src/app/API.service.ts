/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateReservation: OnCreateReservationSubscription;
  onUpdateReservation: OnUpdateReservationSubscription;
  onDeleteReservation: OnDeleteReservationSubscription;
  onCreateClient: OnCreateClientSubscription;
  onUpdateClient: OnUpdateClientSubscription;
  onDeleteClient: OnDeleteClientSubscription;
  onCreateRoom: OnCreateRoomSubscription;
  onUpdateRoom: OnUpdateRoomSubscription;
  onDeleteRoom: OnDeleteRoomSubscription;
  onCreateHotel: OnCreateHotelSubscription;
  onUpdateHotel: OnUpdateHotelSubscription;
  onDeleteHotel: OnDeleteHotelSubscription;
};

export type CreateReservationInput = {
  id?: string | null;
  dateIn: string;
  dateOut: string;
  _version?: number | null;
  reservationRoomId?: string | null;
  reservationClientId?: string | null;
  reservationHotelId?: string | null;
};

export type ModelReservationConditionInput = {
  dateIn?: ModelStringInput | null;
  dateOut?: ModelStringInput | null;
  and?: Array<ModelReservationConditionInput | null> | null;
  or?: Array<ModelReservationConditionInput | null> | null;
  not?: ModelReservationConditionInput | null;
  reservationRoomId?: ModelIDInput | null;
  reservationClientId?: ModelIDInput | null;
  reservationHotelId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Reservation = {
  __typename: "Reservation";
  id: string;
  dateIn: string;
  dateOut: string;
  Room?: Room | null;
  Client?: Client | null;
  Hotel?: Hotel | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  reservationRoomId?: string | null;
  reservationClientId?: string | null;
  reservationHotelId?: string | null;
};

export type Room = {
  __typename: "Room";
  id: string;
  type: string;
  amount: string;
  Hotel?: Hotel | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  roomHotelId?: string | null;
};

export type Hotel = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Client = {
  __typename: "Client";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateReservationInput = {
  id: string;
  dateIn?: string | null;
  dateOut?: string | null;
  _version?: number | null;
  reservationRoomId?: string | null;
  reservationClientId?: string | null;
  reservationHotelId?: string | null;
};

export type DeleteReservationInput = {
  id: string;
  _version?: number | null;
};

export type CreateClientInput = {
  id?: string | null;
  name: string;
  email: string;
  _version?: number | null;
};

export type ModelClientConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelClientConditionInput | null> | null;
  or?: Array<ModelClientConditionInput | null> | null;
  not?: ModelClientConditionInput | null;
};

export type UpdateClientInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  _version?: number | null;
};

export type DeleteClientInput = {
  id: string;
  _version?: number | null;
};

export type CreateRoomInput = {
  id?: string | null;
  type: string;
  amount: string;
  _version?: number | null;
  roomHotelId?: string | null;
};

export type ModelRoomConditionInput = {
  type?: ModelStringInput | null;
  amount?: ModelStringInput | null;
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
  roomHotelId?: ModelIDInput | null;
};

export type UpdateRoomInput = {
  id: string;
  type?: string | null;
  amount?: string | null;
  _version?: number | null;
  roomHotelId?: string | null;
};

export type DeleteRoomInput = {
  id: string;
  _version?: number | null;
};

export type CreateHotelInput = {
  id?: string | null;
  name: string;
  address: string;
  picture: string;
  _version?: number | null;
};

export type ModelHotelConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  picture?: ModelStringInput | null;
  and?: Array<ModelHotelConditionInput | null> | null;
  or?: Array<ModelHotelConditionInput | null> | null;
  not?: ModelHotelConditionInput | null;
};

export type UpdateHotelInput = {
  id: string;
  name?: string | null;
  address?: string | null;
  picture?: string | null;
  _version?: number | null;
};

export type DeleteHotelInput = {
  id: string;
  _version?: number | null;
};

export type ModelReservationFilterInput = {
  id?: ModelIDInput | null;
  dateIn?: ModelStringInput | null;
  dateOut?: ModelStringInput | null;
  and?: Array<ModelReservationFilterInput | null> | null;
  or?: Array<ModelReservationFilterInput | null> | null;
  not?: ModelReservationFilterInput | null;
  reservationRoomId?: ModelIDInput | null;
  reservationClientId?: ModelIDInput | null;
  reservationHotelId?: ModelIDInput | null;
};

export type ModelReservationConnection = {
  __typename: "ModelReservationConnection";
  items: Array<Reservation | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelClientFilterInput | null> | null;
  or?: Array<ModelClientFilterInput | null> | null;
  not?: ModelClientFilterInput | null;
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection";
  items: Array<Client | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelStringInput | null;
  amount?: ModelStringInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
  roomHotelId?: ModelIDInput | null;
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection";
  items: Array<Room | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelHotelFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  picture?: ModelStringInput | null;
  and?: Array<ModelHotelFilterInput | null> | null;
  or?: Array<ModelHotelFilterInput | null> | null;
  not?: ModelHotelFilterInput | null;
};

export type ModelHotelConnection = {
  __typename: "ModelHotelConnection";
  items: Array<Hotel | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSubscriptionReservationFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  dateIn?: ModelSubscriptionStringInput | null;
  dateOut?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionReservationFilterInput | null> | null;
  or?: Array<ModelSubscriptionReservationFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionClientFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionClientFilterInput | null> | null;
  or?: Array<ModelSubscriptionClientFilterInput | null> | null;
};

export type ModelSubscriptionRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  type?: ModelSubscriptionStringInput | null;
  amount?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRoomFilterInput | null> | null;
  or?: Array<ModelSubscriptionRoomFilterInput | null> | null;
};

export type ModelSubscriptionHotelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  picture?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionHotelFilterInput | null> | null;
  or?: Array<ModelSubscriptionHotelFilterInput | null> | null;
};

export type CreateReservationMutation = {
  __typename: "Reservation";
  id: string;
  dateIn: string;
  dateOut: string;
  Room?: {
    __typename: "Room";
    id: string;
    type: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    roomHotelId?: string | null;
  } | null;
  Client?: {
    __typename: "Client";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  reservationRoomId?: string | null;
  reservationClientId?: string | null;
  reservationHotelId?: string | null;
};

export type UpdateReservationMutation = {
  __typename: "Reservation";
  id: string;
  dateIn: string;
  dateOut: string;
  Room?: {
    __typename: "Room";
    id: string;
    type: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    roomHotelId?: string | null;
  } | null;
  Client?: {
    __typename: "Client";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  reservationRoomId?: string | null;
  reservationClientId?: string | null;
  reservationHotelId?: string | null;
};

export type DeleteReservationMutation = {
  __typename: "Reservation";
  id: string;
  dateIn: string;
  dateOut: string;
  Room?: {
    __typename: "Room";
    id: string;
    type: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    roomHotelId?: string | null;
  } | null;
  Client?: {
    __typename: "Client";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  reservationRoomId?: string | null;
  reservationClientId?: string | null;
  reservationHotelId?: string | null;
};

export type CreateClientMutation = {
  __typename: "Client";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateClientMutation = {
  __typename: "Client";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteClientMutation = {
  __typename: "Client";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  type: string;
  amount: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  roomHotelId?: string | null;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  type: string;
  amount: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  roomHotelId?: string | null;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  type: string;
  amount: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  roomHotelId?: string | null;
};

export type CreateHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetReservationQuery = {
  __typename: "Reservation";
  id: string;
  dateIn: string;
  dateOut: string;
  Room?: {
    __typename: "Room";
    id: string;
    type: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    roomHotelId?: string | null;
  } | null;
  Client?: {
    __typename: "Client";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  reservationRoomId?: string | null;
  reservationClientId?: string | null;
  reservationHotelId?: string | null;
};

export type ListReservationsQuery = {
  __typename: "ModelReservationConnection";
  items: Array<{
    __typename: "Reservation";
    id: string;
    dateIn: string;
    dateOut: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    reservationRoomId?: string | null;
    reservationClientId?: string | null;
    reservationHotelId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncReservationsQuery = {
  __typename: "ModelReservationConnection";
  items: Array<{
    __typename: "Reservation";
    id: string;
    dateIn: string;
    dateOut: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    reservationRoomId?: string | null;
    reservationClientId?: string | null;
    reservationHotelId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetClientQuery = {
  __typename: "Client";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListClientsQuery = {
  __typename: "ModelClientConnection";
  items: Array<{
    __typename: "Client";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncClientsQuery = {
  __typename: "ModelClientConnection";
  items: Array<{
    __typename: "Client";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  type: string;
  amount: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  roomHotelId?: string | null;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    type: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    roomHotelId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    type: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    roomHotelId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetHotelQuery = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListHotelsQuery = {
  __typename: "ModelHotelConnection";
  items: Array<{
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncHotelsQuery = {
  __typename: "ModelHotelConnection";
  items: Array<{
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateReservationSubscription = {
  __typename: "Reservation";
  id: string;
  dateIn: string;
  dateOut: string;
  Room?: {
    __typename: "Room";
    id: string;
    type: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    roomHotelId?: string | null;
  } | null;
  Client?: {
    __typename: "Client";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  reservationRoomId?: string | null;
  reservationClientId?: string | null;
  reservationHotelId?: string | null;
};

export type OnUpdateReservationSubscription = {
  __typename: "Reservation";
  id: string;
  dateIn: string;
  dateOut: string;
  Room?: {
    __typename: "Room";
    id: string;
    type: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    roomHotelId?: string | null;
  } | null;
  Client?: {
    __typename: "Client";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  reservationRoomId?: string | null;
  reservationClientId?: string | null;
  reservationHotelId?: string | null;
};

export type OnDeleteReservationSubscription = {
  __typename: "Reservation";
  id: string;
  dateIn: string;
  dateOut: string;
  Room?: {
    __typename: "Room";
    id: string;
    type: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    roomHotelId?: string | null;
  } | null;
  Client?: {
    __typename: "Client";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  reservationRoomId?: string | null;
  reservationClientId?: string | null;
  reservationHotelId?: string | null;
};

export type OnCreateClientSubscription = {
  __typename: "Client";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateClientSubscription = {
  __typename: "Client";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteClientSubscription = {
  __typename: "Client";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  type: string;
  amount: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  roomHotelId?: string | null;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  type: string;
  amount: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  roomHotelId?: string | null;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  type: string;
  amount: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  roomHotelId?: string | null;
};

export type OnCreateHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateReservation(
    input: CreateReservationInput,
    condition?: ModelReservationConditionInput
  ): Promise<CreateReservationMutation> {
    const statement = `mutation CreateReservation($input: CreateReservationInput!, $condition: ModelReservationConditionInput) {
        createReservation(input: $input, condition: $condition) {
          __typename
          id
          dateIn
          dateOut
          Room {
            __typename
            id
            type
            amount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            roomHotelId
          }
          Client {
            __typename
            id
            name
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          reservationRoomId
          reservationClientId
          reservationHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateReservationMutation>response.data.createReservation;
  }
  async UpdateReservation(
    input: UpdateReservationInput,
    condition?: ModelReservationConditionInput
  ): Promise<UpdateReservationMutation> {
    const statement = `mutation UpdateReservation($input: UpdateReservationInput!, $condition: ModelReservationConditionInput) {
        updateReservation(input: $input, condition: $condition) {
          __typename
          id
          dateIn
          dateOut
          Room {
            __typename
            id
            type
            amount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            roomHotelId
          }
          Client {
            __typename
            id
            name
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          reservationRoomId
          reservationClientId
          reservationHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateReservationMutation>response.data.updateReservation;
  }
  async DeleteReservation(
    input: DeleteReservationInput,
    condition?: ModelReservationConditionInput
  ): Promise<DeleteReservationMutation> {
    const statement = `mutation DeleteReservation($input: DeleteReservationInput!, $condition: ModelReservationConditionInput) {
        deleteReservation(input: $input, condition: $condition) {
          __typename
          id
          dateIn
          dateOut
          Room {
            __typename
            id
            type
            amount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            roomHotelId
          }
          Client {
            __typename
            id
            name
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          reservationRoomId
          reservationClientId
          reservationHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteReservationMutation>response.data.deleteReservation;
  }
  async CreateClient(
    input: CreateClientInput,
    condition?: ModelClientConditionInput
  ): Promise<CreateClientMutation> {
    const statement = `mutation CreateClient($input: CreateClientInput!, $condition: ModelClientConditionInput) {
        createClient(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateClientMutation>response.data.createClient;
  }
  async UpdateClient(
    input: UpdateClientInput,
    condition?: ModelClientConditionInput
  ): Promise<UpdateClientMutation> {
    const statement = `mutation UpdateClient($input: UpdateClientInput!, $condition: ModelClientConditionInput) {
        updateClient(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateClientMutation>response.data.updateClient;
  }
  async DeleteClient(
    input: DeleteClientInput,
    condition?: ModelClientConditionInput
  ): Promise<DeleteClientMutation> {
    const statement = `mutation DeleteClient($input: DeleteClientInput!, $condition: ModelClientConditionInput) {
        deleteClient(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteClientMutation>response.data.deleteClient;
  }
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          id
          type
          amount
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          roomHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(
    input: UpdateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!, $condition: ModelRoomConditionInput) {
        updateRoom(input: $input, condition: $condition) {
          __typename
          id
          type
          amount
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          roomHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(
    input: DeleteRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!, $condition: ModelRoomConditionInput) {
        deleteRoom(input: $input, condition: $condition) {
          __typename
          id
          type
          amount
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          roomHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async CreateHotel(
    input: CreateHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<CreateHotelMutation> {
    const statement = `mutation CreateHotel($input: CreateHotelInput!, $condition: ModelHotelConditionInput) {
        createHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          picture
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHotelMutation>response.data.createHotel;
  }
  async UpdateHotel(
    input: UpdateHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<UpdateHotelMutation> {
    const statement = `mutation UpdateHotel($input: UpdateHotelInput!, $condition: ModelHotelConditionInput) {
        updateHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          picture
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHotelMutation>response.data.updateHotel;
  }
  async DeleteHotel(
    input: DeleteHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<DeleteHotelMutation> {
    const statement = `mutation DeleteHotel($input: DeleteHotelInput!, $condition: ModelHotelConditionInput) {
        deleteHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          picture
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHotelMutation>response.data.deleteHotel;
  }
  async GetReservation(id: string): Promise<GetReservationQuery> {
    const statement = `query GetReservation($id: ID!) {
        getReservation(id: $id) {
          __typename
          id
          dateIn
          dateOut
          Room {
            __typename
            id
            type
            amount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            roomHotelId
          }
          Client {
            __typename
            id
            name
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          reservationRoomId
          reservationClientId
          reservationHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetReservationQuery>response.data.getReservation;
  }
  async ListReservations(
    filter?: ModelReservationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListReservationsQuery> {
    const statement = `query ListReservations($filter: ModelReservationFilterInput, $limit: Int, $nextToken: String) {
        listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            dateIn
            dateOut
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            reservationRoomId
            reservationClientId
            reservationHotelId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListReservationsQuery>response.data.listReservations;
  }
  async SyncReservations(
    filter?: ModelReservationFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncReservationsQuery> {
    const statement = `query SyncReservations($filter: ModelReservationFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncReservations(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            dateIn
            dateOut
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            reservationRoomId
            reservationClientId
            reservationHotelId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncReservationsQuery>response.data.syncReservations;
  }
  async GetClient(id: string): Promise<GetClientQuery> {
    const statement = `query GetClient($id: ID!) {
        getClient(id: $id) {
          __typename
          id
          name
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetClientQuery>response.data.getClient;
  }
  async ListClients(
    filter?: ModelClientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListClientsQuery> {
    const statement = `query ListClients($filter: ModelClientFilterInput, $limit: Int, $nextToken: String) {
        listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListClientsQuery>response.data.listClients;
  }
  async SyncClients(
    filter?: ModelClientFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncClientsQuery> {
    const statement = `query SyncClients($filter: ModelClientFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncClients(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncClientsQuery>response.data.syncClients;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          type
          amount
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          roomHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String) {
        listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            amount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            roomHotelId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  async SyncRooms(
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncRoomsQuery> {
    const statement = `query SyncRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncRooms(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            type
            amount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            roomHotelId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncRoomsQuery>response.data.syncRooms;
  }
  async GetHotel(id: string): Promise<GetHotelQuery> {
    const statement = `query GetHotel($id: ID!) {
        getHotel(id: $id) {
          __typename
          id
          name
          address
          picture
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHotelQuery>response.data.getHotel;
  }
  async ListHotels(
    filter?: ModelHotelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHotelsQuery> {
    const statement = `query ListHotels($filter: ModelHotelFilterInput, $limit: Int, $nextToken: String) {
        listHotels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHotelsQuery>response.data.listHotels;
  }
  async SyncHotels(
    filter?: ModelHotelFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncHotelsQuery> {
    const statement = `query SyncHotels($filter: ModelHotelFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncHotels(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncHotelsQuery>response.data.syncHotels;
  }
  OnCreateReservationListener(
    filter?: ModelSubscriptionReservationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateReservation">>
  > {
    const statement = `subscription OnCreateReservation($filter: ModelSubscriptionReservationFilterInput) {
        onCreateReservation(filter: $filter) {
          __typename
          id
          dateIn
          dateOut
          Room {
            __typename
            id
            type
            amount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            roomHotelId
          }
          Client {
            __typename
            id
            name
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          reservationRoomId
          reservationClientId
          reservationHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateReservation">>
    >;
  }

  OnUpdateReservationListener(
    filter?: ModelSubscriptionReservationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateReservation">>
  > {
    const statement = `subscription OnUpdateReservation($filter: ModelSubscriptionReservationFilterInput) {
        onUpdateReservation(filter: $filter) {
          __typename
          id
          dateIn
          dateOut
          Room {
            __typename
            id
            type
            amount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            roomHotelId
          }
          Client {
            __typename
            id
            name
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          reservationRoomId
          reservationClientId
          reservationHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateReservation">>
    >;
  }

  OnDeleteReservationListener(
    filter?: ModelSubscriptionReservationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteReservation">>
  > {
    const statement = `subscription OnDeleteReservation($filter: ModelSubscriptionReservationFilterInput) {
        onDeleteReservation(filter: $filter) {
          __typename
          id
          dateIn
          dateOut
          Room {
            __typename
            id
            type
            amount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            roomHotelId
          }
          Client {
            __typename
            id
            name
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          reservationRoomId
          reservationClientId
          reservationHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteReservation">>
    >;
  }

  OnCreateClientListener(
    filter?: ModelSubscriptionClientFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateClient">>
  > {
    const statement = `subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
        onCreateClient(filter: $filter) {
          __typename
          id
          name
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateClient">>
    >;
  }

  OnUpdateClientListener(
    filter?: ModelSubscriptionClientFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateClient">>
  > {
    const statement = `subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
        onUpdateClient(filter: $filter) {
          __typename
          id
          name
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateClient">>
    >;
  }

  OnDeleteClientListener(
    filter?: ModelSubscriptionClientFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteClient">>
  > {
    const statement = `subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
        onDeleteClient(filter: $filter) {
          __typename
          id
          name
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteClient">>
    >;
  }

  OnCreateRoomListener(
    filter?: ModelSubscriptionRoomFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
  > {
    const statement = `subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
        onCreateRoom(filter: $filter) {
          __typename
          id
          type
          amount
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          roomHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
    >;
  }

  OnUpdateRoomListener(
    filter?: ModelSubscriptionRoomFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
  > {
    const statement = `subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
        onUpdateRoom(filter: $filter) {
          __typename
          id
          type
          amount
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          roomHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
    >;
  }

  OnDeleteRoomListener(
    filter?: ModelSubscriptionRoomFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
  > {
    const statement = `subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
        onDeleteRoom(filter: $filter) {
          __typename
          id
          type
          amount
          Hotel {
            __typename
            id
            name
            address
            picture
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          roomHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
    >;
  }

  OnCreateHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHotel">>
  > {
    const statement = `subscription OnCreateHotel($filter: ModelSubscriptionHotelFilterInput) {
        onCreateHotel(filter: $filter) {
          __typename
          id
          name
          address
          picture
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHotel">>
    >;
  }

  OnUpdateHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHotel">>
  > {
    const statement = `subscription OnUpdateHotel($filter: ModelSubscriptionHotelFilterInput) {
        onUpdateHotel(filter: $filter) {
          __typename
          id
          name
          address
          picture
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHotel">>
    >;
  }

  OnDeleteHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHotel">>
  > {
    const statement = `subscription OnDeleteHotel($filter: ModelSubscriptionHotelFilterInput) {
        onDeleteHotel(filter: $filter) {
          __typename
          id
          name
          address
          picture
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHotel">>
    >;
  }
}
