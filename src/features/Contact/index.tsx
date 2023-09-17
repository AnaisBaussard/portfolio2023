import { Trans } from 'next-i18next'

import { ContactLinks } from 'components'
import { Emphasis, Layout, ResponsiveTextContainer, Separator, Text, Title } from 'design-system'

export default function Contact() {
  return (
    <>
      <Layout bottomMargin topMargin>
        <Title tAlign="center">
          <Trans
            components={[
              <Emphasis key="0" tColor="secondary" />,
              <Emphasis key="1" tColor="primary" />,
            ]}
            i18nKey="contact:title"
          />
        </Title>
        <Separator mb={3} mt={2} />
        <ContactLinks mb={3} mode="default" />
        <ResponsiveTextContainer maxW="500px">
          <Text>
            <Trans i18nKey="contact:description" />
          </Text>
        </ResponsiveTextContainer>
      </Layout>
    </>
  )
}
