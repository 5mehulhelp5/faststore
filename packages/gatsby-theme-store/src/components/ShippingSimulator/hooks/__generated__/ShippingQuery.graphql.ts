
/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
  ID: string
}

// Operation related types
export type ShippingQueryQueryVariables = Exact<{
  items: Maybe<Array<Maybe<Vtex_ShippingItem>> | Maybe<Vtex_ShippingItem>>;
  postalCode: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
}>;


export type ShippingQueryQuery = { vtex: { shippingSLA: Maybe<{ deliveryOptions: Array<{ id: string, estimate: string, price: number }> }> } };


// Query Related Code

export const ShippingQuery = {
  query: undefined,
  sha256Hash: "a02e8933ab8401e118b6d4df3c6521c851a3edaa8ed693379f74b59c27e66f52",
  operationName: "ShippingQuery",
}

