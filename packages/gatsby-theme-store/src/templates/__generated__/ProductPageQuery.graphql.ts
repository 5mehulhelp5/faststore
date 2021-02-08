
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
export type ProductPageQueryQueryVariables = Exact<{
  slug: Maybe<Scalars['String']>;
  staticPath: Scalars['Boolean'];
}>;


export type ProductPageQueryQuery = { vtex: { product?: Maybe<{ productReference: Maybe<string>, productName: Maybe<string>, linkText: Maybe<string>, description: Maybe<string>, brand: Maybe<string>, titleTag: Maybe<string>, metaTagDescription: Maybe<string>, productId: Maybe<string>, items: Maybe<Array<Maybe<{ name: Maybe<string>, complementName: Maybe<string>, itemId: Maybe<string>, ean: Maybe<string>, referenceId: Maybe<Array<Maybe<{ value: Maybe<string> }>>>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, videos: Maybe<Array<Maybe<{ videoUrl: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ commercialOffer: Maybe<{ price: Maybe<number>, availableQuantity: Maybe<number>, priceValidUntil: Maybe<string> }> }>>> }>>>, productClusters: Maybe<Array<Maybe<{ name: Maybe<string> }>>>, categoryTree: Maybe<Array<Maybe<{ href: Maybe<string>, name: Maybe<string> }>>> }> } };


// Query Related Code

export const ProductPageQuery = {
  query: undefined,
  sha256Hash: "9cdc7da82d5d6cb789073d51dea68d8e622a3477a953ae65d2b456c32b26c06c",
  operationName: "ProductPageQuery",
}

