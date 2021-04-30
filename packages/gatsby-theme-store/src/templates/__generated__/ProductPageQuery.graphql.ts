
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


export type ProductPageQueryQuery = { vtex: { product?: Maybe<{ productReference: Maybe<string>, productName: Maybe<string>, linkText: Maybe<string>, description: Maybe<string>, brand: Maybe<string>, titleTag: Maybe<string>, metaTagDescription: Maybe<string>, id: Maybe<string>, items: Maybe<Array<Maybe<{ name: Maybe<string>, complementName: Maybe<string>, itemId: Maybe<string>, ean: Maybe<string>, referenceId: Maybe<Array<Maybe<{ value: Maybe<string> }>>>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, videos: Maybe<Array<Maybe<{ videoUrl: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ commercialOffer: Maybe<{ spotPrice: Maybe<number>, price: Maybe<number>, listPrice: Maybe<number>, availableQuantity: Maybe<number>, priceValidUntil: Maybe<string> }> }>>> }>>>, productClusters: Maybe<Array<Maybe<{ id: Maybe<string>, name: Maybe<string> }>>>, properties: Maybe<Array<Maybe<{ name: Maybe<string>, originalName: Maybe<string>, values: Maybe<Array<Maybe<string>>> }>>>, categoryTree: Maybe<Array<Maybe<{ href: Maybe<string>, name: Maybe<string> }>>> }> } };


// Query Related Code

export const ProductPageQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query ProductPageQuery($slug: String, $staticPath: Boolean!) {\n  vtex {\n    product(slug: $slug) @include(if: $staticPath) {\n      productReference\n      productName\n      linkText\n      items {\n        name\n        complementName\n        itemId\n        referenceId {\n          value: Value\n        }\n        images {\n          imageUrl\n          imageText\n        }\n        videos {\n          videoUrl\n        }\n        sellers {\n          commercialOffer: commertialOffer {\n            price: Price\n            listPrice: ListPrice\n            availableQuantity: AvailableQuantity\n            priceValidUntil: PriceValidUntil\n            spotPrice\n          }\n        }\n        ean\n      }\n      productClusters {\n        id\n        name\n      }\n      properties {\n        name\n        originalName\n        values\n      }\n      description\n      brand\n      categoryTree {\n        href\n        name\n      }\n      titleTag\n      metaTagDescription\n      id: productId\n    }\n  }\n}\n",
  sha256Hash: "b3f95cb3006dd7869f26e637ebe99c019792a2e378dc1c01ae6587d3239011bb",
  operationName: "ProductPageQuery",
}

