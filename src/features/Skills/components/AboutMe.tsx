import { Trans, useTranslation } from 'next-i18next'

import { ResponsiveTextContainer, Text, Title } from 'design-system'

const AboutMe = () => {
  const { t } = useTranslation('skills')

  return (
    <>
      <Title mb={2} mode="small" mt={3} withSeparator>
        {t('skills:aboutMe.title')}
      </Title>
      <ResponsiveTextContainer maxW="600px" tAlign="left">
        <Text>
          <Trans i18nKey="skills:aboutMe.description" />
        </Text>
      </ResponsiveTextContainer>
    </>
  )
}

export default AboutMe
