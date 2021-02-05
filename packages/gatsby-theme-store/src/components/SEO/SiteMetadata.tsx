import React from 'react'
import type { FC } from 'react'

import Helmet from './Helmet'

export interface Props {
  description: string
  lang?: string
  meta?: any[]
  title: string
  author?: string
  titleTemplate?: string
}

const SiteMetadata: FC<Props> = ({
  title,
  titleTemplate,
  description,
  lang = 'en',
  author = 'VTEX',
  meta = [],
}) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    titleTemplate={titleTemplate}
    title={title}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:creator',
        content: author,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ].concat(meta)}
  />
)

export default SiteMetadata
