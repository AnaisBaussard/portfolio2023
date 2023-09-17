import { map, pull } from 'lodash'
import { useTranslation } from 'next-i18next'
import { Theme } from 'styled-components'

import { CONTACT_INFO } from 'config/constants'
import { useResponsiveContext } from 'context/Responsive'
import { Div, Separator } from 'design-system'
import { SizeProps } from 'design-system/injectors'
import { FileDownload, LinkedIn, Message } from 'design-system/Icon'

import { ContactLink } from './components'

type ContactLinkName = 'email' | 'linkedin' | 'resume' | 'separator'
type ContactLinksProps = {
  exclude?: Omit<ContactLinkName[], 'separator'>
  mode?: 'default' | 'small'
} & SizeProps

const linksConfig: ContactLinkName[] = ['email', 'linkedin', 'resume']

const ContactLinks = ({ exclude = [], mode = 'default', ...props }: ContactLinksProps) => {
  const { i18n, t } = useTranslation()
  const { isDesktop } = useResponsiveContext()

  // Clone linksConfig to avoid mutating the original array
  const links: ContactLinkName[] = pull([...linksConfig], ...(exclude || []))
    .join(',separator,')
    .split(',') as ContactLinkName[]

  const flexGapSize: keyof Theme['sizes'] = mode !== 'small' && isDesktop ? 4 : 2
  const iconSize: keyof Theme['sizes'] = mode === 'small' ? 5 : 6

  const ContactLinkSeparator = ({ index }: { index: number }) =>
    isDesktop ? (
      <Separator color="mediumGrey" isVertical key={`contactlinkseparator-${index}`} h="200px" />
    ) : (
      <></>
    )

  return (
    <Div ai="ce" di="f" fw="w" g={flexGapSize} jc="ce" {...props}>
      {map(links, (link, index) => {
        switch (link) {
          default:
            return <></>
          case 'email':
            return (
              <ContactLink
                href={`mailto:${CONTACT_INFO.EMAIL}`}
                key={`contact-email-${mode}-${index}`}
                icon={<Message gradient="primarySvg" size={iconSize} />}
              >
                {CONTACT_INFO.EMAIL}
              </ContactLink>
            )
          case 'linkedin':
            return (
              <ContactLink
                href={CONTACT_INFO.LINKEDIN}
                key={`contact-linkedin-${mode}-${index}`}
                icon={<LinkedIn gradient="violetSvg" size={iconSize} />}
              >
                {t('common:components.contactLinks.linkedIn')}
              </ContactLink>
            )
          case 'resume':
            return (
              <ContactLink
                href={CONTACT_INFO.RESUME[i18n.language as Locale]}
                key={`contact-resume-${mode}-${index}`}
                icon={<FileDownload gradient="secondarySvg" size={iconSize} />}
                locale={false}
              >
                {t('common:components.contactLinks.resume')}
              </ContactLink>
            )
          case 'separator':
            return <ContactLinkSeparator index={index} />
        }
      })}
    </Div>
  )
}

export default ContactLinks
