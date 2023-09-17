import { Trans, useTranslation } from 'next-i18next'

import { ExperienceList } from 'components'
import { CONTACT_INFO } from 'config/constants'
import { experiences } from 'config/experience'
import routes from 'config/routes'
import { Button, Cell, Grid, Link, ResponsiveTextContainer, Text, Title } from 'design-system'

const WebDev = () => {
  const { i18n, t } = useTranslation('home')
  return (
    <ResponsiveTextContainer mt={6}>
      <Title mb={2.5} separatorColor="secondary" withSeparator>
        {t('home:webDev.title')}
      </Title>
      <Grid cGap={3} mdLgCGap={0} mdLgRGap={3}>
        <Cell $cols={6} mdLgCols={12}>
          <Text mb={2.5}>
            <Trans
              components={[
                <Link href={CONTACT_INFO.RESUME[i18n.language as Locale]} key="0" locale={false} />,
              ]}
              i18nKey="home:webDev.description"
            />
          </Text>
          <Button as={Link} href={routes.contact} mr={1.5}>
            {t('home:buttons.contact')}
          </Button>
          <Button as={Link} href={routes.skills} color="secondary">
            {t('home:buttons.skills')}
          </Button>
        </Cell>
        <Cell $cols={6} mdLgCols={12}>
          <Text mb={2}>{t('home:webDev.projects')}</Text>
          <ExperienceList experiences={experiences} mode="small" trimNb={3} />
        </Cell>
      </Grid>
    </ResponsiveTextContainer>
  )
}

export default WebDev
