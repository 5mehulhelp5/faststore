/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
import 'requestidlecallback-polyfill'

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import type { WrapRootElementBrowserArgs } from 'gatsby'
import type { ElementType } from 'react'

import { Provider as OrderFormProvider } from './sdk/orderForm/LazyProvider'
import { Provider as RegionProvider } from './sdk/region/Provider'
import { Provider as MinicartProvider } from './sdk/minicart/Provider'
import { Provider as ToastProvider } from './sdk/toast/Provider'
import { Provider as VTEXRCProvider } from './sdk/pixel/vtexrc/Provider'
import ErrorBoundary from './components/Error/ErrorBoundary'
import {
  Progress,
  onRouteUpdate as progressOnRouteUpdate,
} from './sdk/progress'

export const replaceHydrateFunction = () => async (
  element: ElementType,
  container: Element,
  callback: any
) => {
  if (typeof IntersectionObserver === 'undefined') {
    await import('intersection-observer')
  }

  const development = (process.env.GATSBY_BUILD_STAGE as any).includes(
    'develop'
  )

  const { unstable_createRoot: createRoot }: any = ReactDOM
  const root = createRoot(container, {
    hydrate: !development,
    hydrationOptions: {
      onHydrated: callback,
    },
  })

  const renderFn = () => {
    console.log({ hydrate: !development })
    console.log({ callback })
    root.render(element)
  }

  (window as any).renderFn = renderFn

  renderFn()
}

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => {
  const root = (
    <ErrorBoundary>
      <VTEXRCProvider>
        <ToastProvider>
          <RegionProvider>
            <OrderFormProvider>
              <MinicartProvider>{element}</MinicartProvider>
            </OrderFormProvider>
          </RegionProvider>
        </ToastProvider>
      </VTEXRCProvider>
    </ErrorBoundary>
  )

  if (process.env.NODE_ENV === 'development') {
    return <StrictMode>{root}</StrictMode>
  }

  return root
}

export const wrapPageElement = ({
  element,
  props: { location },
}: WrapRootElementBrowserArgs | any) => (
  <Progress location={location}>{element}</Progress>
)

export const onRouteUpdate = () => {
  progressOnRouteUpdate()
}
