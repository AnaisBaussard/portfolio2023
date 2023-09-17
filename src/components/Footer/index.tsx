import React from 'react'
import { useTranslation } from 'next-i18next'
import { map } from 'lodash'

import { CONTACT_INFO } from 'config/constants'
import { getMenuLinks } from 'config/menuLinks'
import { useResponsiveContext } from 'context/Responsive'
import { Div, Link, MenuText, Text } from 'design-system'
import { GitHub, LinkedIn } from 'design-system/Icon'

import { FooterContainer } from './styles'

const Footer = () => {
  const { t } = useTranslation('menu')
  const { isDesktop } = useResponsiveContext()
  return (
    <FooterContainer>
      {isDesktop && (
        <Div di="f" fd="c" fw="w" maxH="150px">
          {map(getMenuLinks(t), ({ label, path }) => (
            <Link
              data-testid={`footer-menu-link-${label}`}
              href={path}
              isUnderlined={false}
              key={`footer-menu-link-${label}`}
              mb={1}
              mr={8}
            >
              <MenuText tSize={1.125}>{label}</MenuText>
            </Link>
          ))}
        </Div>
      )}
      <Div ai={isDesktop ? 'fe' : 'ce'} di="f" fd="c">
        <Text mb={1}>{CONTACT_INFO.EMAIL}</Text>
        <Div di="f" g={0.75}>
          <Link href={CONTACT_INFO.GITHUB} isInherited>
            <GitHub isClickable size={1.5} />
          </Link>
          <Link href={CONTACT_INFO.LINKEDIN} isInherited>
            <LinkedIn isClickable size={1.5} />
          </Link>
        </Div>
        <Text mt="auto">{`© ${new Date().getFullYear()} ${CONTACT_INFO.NAME}`}</Text>
      </Div>
    </FooterContainer>
  )
}

export default Footer
