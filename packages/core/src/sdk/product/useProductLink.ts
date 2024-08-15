import { sendAnalyticsEvent } from '@faststore/sdk'
import { useCallback } from 'react'
import type { CurrencyCode, SelectItemEvent } from '@faststore/sdk'

import type { ProductSummary_ProductFragment } from '@generated/graphql'

import { useSession } from '../session'
import type { AnalyticsItem, SearchSelectItemEvent } from '../analytics/types'

import { createCategoryObject } from '../../utils/createCategoryObject'

export type ProductLinkOptions = {
  index: number
  product: ProductSummary_ProductFragment
  selectedOffer: number
  list_name: string
}

export const useProductLink = ({
  index,
  product,
  selectedOffer,
  list_name,
}: ProductLinkOptions) => {
  const { slug } = product
  const {
    currency: { code },
  } = useSession()

  const onClick = useCallback(() => {
    sendAnalyticsEvent<SelectItemEvent<AnalyticsItem>>({
      name: 'select_item',
      params: {
        items: [
          {
            item_id: product.isVariantOf.productGroupID,
            item_name: product.isVariantOf.name,
            item_brand: product.brand.name,
            item_variant: product.sku,
            item_list_name: list_name ? list_name : '',
            index,
            price: product.offers.offers[selectedOffer].price,
            discount:
              product.offers.offers[selectedOffer].listPrice -
              product.offers.offers[selectedOffer].price,
            currency: code as CurrencyCode,
            item_variant_name: product.name,
            product_reference_id: product.gtin,
            ...createCategoryObject(
              product.categories.map((item) => item.name)
            ),
          },
        ],
      },
    })

    sendAnalyticsEvent<SearchSelectItemEvent>({
      name: 'search_select_item',
      params: {
        url: window.location.href,
        items: [
          {
            item_id: product.isVariantOf.productGroupID,
            item_variant: product.sku,
            index,
          },
        ],
      },
    })
  }, [code, product, index, selectedOffer])

  return {
    href: `/${slug}/p`,
    onClick,
    'data-testid': 'product-link',
  }
}
