'use client'

import type { BannerTextProps } from 'app/components/sections/BannerText'
import { OverriddenDefaultBannerText as BannerText } from 'app/components/sections/BannerText/OverriddenDefaultBannerText'

import type { NewsletterProps } from 'app/components/sections/Newsletter'
import { OverriddenDefaultNewsletter as Newsletter } from 'app/components/sections/Newsletter/OverriddenDefaultNewsletter'

import Section from 'src/components/sections/Section'
import styles from './section.module.scss'

function BannerNewsletter({
  banner,
  newsletter,
}: {
  banner: BannerTextProps
  newsletter: Omit<NewsletterProps, 'card'>
}) {
  return (
    <Section className={`${styles.section} section-banner-newsletter`}>
      <div data-fs-banner-text-newsletter data-fs-content="banner-newsletter">
        <BannerText
          title={banner.title}
          caption={banner.caption}
          link={banner?.link}
          variant={banner.variant}
          colorVariant={banner.colorVariant}
        />
        <Newsletter
          card
          colorVariant={newsletter.colorVariant}
          title={newsletter.title}
          description={newsletter.description}
          icon={newsletter.icon}
          privacyPolicy={newsletter.privacyPolicy}
          emailInputLabel={newsletter.emailInputLabel}
          displayNameInput={newsletter.displayNameInput}
          nameInputLabel={newsletter.nameInputLabel}
          subscribeButtonLabel={newsletter.subscribeButtonLabel}
          subscribeButtonLoadingLabel={newsletter.subscribeButtonLoadingLabel}
          toastSubscribe={newsletter.toastSubscribe}
          toastSubscribeError={newsletter.toastSubscribeError}
        />
      </div>
    </Section>
  )
}

export default BannerNewsletter