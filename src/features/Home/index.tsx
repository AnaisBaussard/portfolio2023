import { Trans } from 'next-i18next'

import { Emphasis, Layout, Separator, SubTitle, Title } from 'design-system'

import { WebDev } from './components'

export default function Home() {
  return (
    <Layout bottomMargin topMargin>
      <Title tAlign="center">
        <Trans
          components={[
            <Emphasis key="0" tColor="secondary" />,
            <Emphasis key="1" tColor="primary" />,
          ]}
          i18nKey="home:title"
        />
      </Title>
      <Separator mb={2} mt={2} />
      <SubTitle tAlign="center">
        <Trans
          components={[
            <Emphasis key="0" tColor="secondary" weight="medium" />,
            <Emphasis key="1" tColor="primary" weight="medium" />,
          ]}
          i18nKey="home:subtitle"
        />
      </SubTitle>
      <WebDev />
    </Layout>
  )
}
