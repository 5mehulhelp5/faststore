/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
}

// Operation related types
export type ProductPageQueryQueryVariables = Exact<{
  slug: Maybe<Scalars['String']>
  staticPath: Scalars['Boolean']
}>

export type ProductPageQueryQuery = {
  vtex: {
    product: Maybe<{
      productName: Maybe<string>
      linkText: Maybe<string>
      productId: Maybe<string>
      description: Maybe<string>
      items: Maybe<
        Array<
          Maybe<{
            itemId: Maybe<string>
            images: Maybe<
              Array<
                Maybe<{ imageUrl: Maybe<string>; imageText: Maybe<string> }>
              >
            >
            sellers: Maybe<
              Array<
                Maybe<{
                  sellerId: Maybe<string>
                  commertialOffer: Maybe<{
                    AvailableQuantity: Maybe<number>
                    Price: Maybe<number>
                  }>
                }>
              >
            >
          }>
        >
      >
      categoryTree: Maybe<
        Array<Maybe<{ href: Maybe<string>; name: Maybe<string> }>>
      >
    }>
  }
}

// Query Related Code

export const ProductPageQuery = {
  query: undefined,
  sha256Hash: "74ddc4a76d3d889619d2297732906aaed52317aa2ea5db935ce472a503621194",
  operationName: "ProductPageQuery",
}
