import { Trans } from 'next-i18next'

import { Emphasis, Layout, Separator, Title } from 'design-system'
import { ExperienceFilteredList } from './components'

export default function Experience() {
  return (
    <Layout bottomMargin topMargin>
      <Title tAlign="center">
        <Trans
          components={[
            <Emphasis key="0" tColor="secondary" />,
            <Emphasis key="1" tColor="primary" />,
          ]}
          i18nKey="experience:title"
        />
      </Title>
      <Separator mb={2} mt={2} />
      <ExperienceFilteredList />
    </Layout>
  )
}
