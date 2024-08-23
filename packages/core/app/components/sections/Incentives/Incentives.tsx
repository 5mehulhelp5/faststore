'use client'

import type { Incentive } from 'app/components/ui/Incentives'
import UIIncentives from 'app/components/ui/Incentives/Incentives'

import Section from 'src/components/sections/Section'
import styles from './section.module.scss'

interface Props {
  incentives: Incentive[]
}

function Incentives({ incentives }: Props) {
  return (
    <Section className={`${styles.section} section-incentives layout__section`}>
      <UIIncentives incentives={incentives} colored />
    </Section>
  )
}

export default Incentives