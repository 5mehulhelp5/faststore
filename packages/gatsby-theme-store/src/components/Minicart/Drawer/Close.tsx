import { useIntl } from '@vtex/gatsby-plugin-i18n'
import { Button } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

interface MinicartCloseProps {
  variant?: string
  onClose?: () => void
}

export const MinicartClose: FC<MinicartCloseProps> = ({ onClose, variant }) => {
  const customVariant = `${variant}.close`
  const { formatMessage } = useIntl()

  return (
    <Button data-testid="closeCart" onClick={onClose} variant={customVariant}>
      {formatMessage({ id: 'minicart.drawer.close' })}
    </Button>
  )
}
