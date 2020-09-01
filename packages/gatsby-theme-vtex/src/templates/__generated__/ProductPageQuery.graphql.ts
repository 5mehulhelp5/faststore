
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
}

// Operation related types
export type ProductPageQueryQueryVariables = Exact<{
  slug: Maybe<Scalars['String']>;
  staticPath: Scalars['Boolean'];
}>;


export type ProductPageQueryQuery = { vtex: { product: Maybe<{ productName: Maybe<string>, linkText: Maybe<string>, productId: Maybe<string>, description: Maybe<string>, items: Maybe<Array<Maybe<{ itemId: Maybe<string>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ sellerId: Maybe<string>, commertialOffer: Maybe<{ AvailableQuantity: Maybe<number>, Price: Maybe<number> }> }>>> }>>>, categoryTree: Maybe<Array<Maybe<{ name: Maybe<string>, href: Maybe<string> }>>> }> } };


// Query Related Code

export const ProductPageQuery = {
  query: "query ProductPageQuery($slug: String, $staticPath: Boolean!) {\n  vtex {\n    product(slug: $slug) @include(if: $staticPath) {\n      productName\n      linkText\n      items {\n        images {\n          imageUrl\n          imageText\n        }\n        sellers {\n          sellerId\n          commertialOffer {\n            AvailableQuantity\n            Price\n          }\n        }\n        itemId\n      }\n      productId\n      description\n      categoryTree {\n        name\n        href\n      }\n    }\n  }\n}\n",
  sha256Hash: "56c9480dc8bf20f79bcf3f6bee72acd67d2b89d8246275db0d8b7e04e36ad40e",
  operationName: "ProductPageQuery",
}

