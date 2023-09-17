import { Trans } from 'next-i18next'

import { Emphasis, Layout, Separator, Title } from 'design-system'

import { AboutMe, AllSkills } from './components'

export default function Skills() {
  return (
    <>
      <Layout bottomMargin topMargin>
        <Title tAlign="center">
          <Trans
            components={[
              <Emphasis key="0" tColor="secondary" />,
              <Emphasis key="1" tColor="primary" />,
            ]}
            i18nKey="skills:title"
          />
        </Title>
        <Separator mt={2} />
        <AllSkills />
        <AboutMe />
      </Layout>
    </>
  )
}
