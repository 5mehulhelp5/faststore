import type { FunctionComponent, HTMLAttributes } from 'react'
import React, { forwardRef } from 'react'
import { Label, SROnly, Link, LinkProps, LinkElementType } from '../..'

export interface SkuOption {
  /**
   * Alternative text description of the image.
   */
  alt?: string
  /**
   * Image URL.
   */
  src?: string
  /**
   * Label to describe the option when selected.
   */
  label: string
  /**
   * Current value for this option.
   */
  value: string
  /**
   * Specifies that this option should be disabled.
   */
  disabled?: boolean
  /**
   * Hex color code for this option. This is mandatory if you want to use the `Color` variant.
   */
  hexColor?: string
}

export interface SkuSelectorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * ID to find this component in testing tools (e.g.: cypress,
   * testing-library, and jest).
   */
  testId?: string
  /**
   * ID of the current instance of the component.
   */
  id?: string
  /**
   * Specify which variant the component should handle.
   */
  variant: 'label' | 'image' | 'color'
  /**
   * SKU options that should be rendered.
   */
  options: SkuOption[]
  /**
   * Name of the SKU property that this selector is relative to.
   */
  skuPropertyName: string
  /**
   * Currently active variation's value.
   */
  activeVariations: Record<string, string>
  /**
   * Extends all Link Props.
   */
  linkProps?: Partial<LinkProps<LinkElementType>>
  /**
   * Function that determines the href string.
   */
  getItemHref: (option: SkuOption) => string
  /**
   * Function that returns a React component that will be used to render images.
   */
  ImageComponent?: FunctionComponent<{
    src: string
    alt: string
  }>
}

const SkuSelector = forwardRef<HTMLDivElement, SkuSelectorProps>(
  function SkuSelector(
    {
      options,
      variant,
      skuPropertyName,
      testId,
      activeVariations,
      linkProps,
      getItemHref,
      ImageComponent,
      ...otherProps
    },
    ref
  ) {
    const activeSelectorValue = activeVariations[skuPropertyName ?? '']

    return (
      <div
        ref={ref}
        data-fs-sku-selector
        data-testid={testId}
        data-fs-sku-selector-variant={variant}
        {...otherProps}
      >
        {skuPropertyName && (
          <Label data-fs-sku-selector-title>
            {skuPropertyName}: <strong>{activeSelectorValue}</strong>
          </Label>
        )}
        <ul data-fs-sku-selector-list>
          {options.map((option, index) => {
            return (
              <li
                key={String(index)}
                title={option.label}
                data-fs-sku-selector-option
                data-fs-sku-selector-disabled={option.disabled}
                data-fs-sku-selector-checked={
                  option.value === activeVariations[skuPropertyName]
                }
              >
                <Link
                  data-fs-sku-selector-option-link
                  href={getItemHref(option)}
                  {...linkProps}
                >
                  <SROnly text={option.label} />
                </Link>

                {variant === 'label' && <span>{option.value}</span>}

                {variant === 'image' && ImageComponent && (
                  <span>
                    <ImageComponent
                      src={option.src ?? ''}
                      alt={option.alt ?? ''}
                      data-fs-sku-selector-option-image
                    />
                  </span>
                )}

                {variant === 'color' && (
                  <span>
                    <div
                      data-fs-sku-selector-option-color
                      title={option.value}
                      style={
                        {
                          '--data-fs-sku-selector-option-color-bkg-color':
                            option.hexColor,
                        } as React.CSSProperties
                      }
                    ></div>
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
)

export default SkuSelector