import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { map } from 'lodash'

import { getMenuLinks } from 'config/menuLinks'
import { useResponsiveContext } from 'context/Responsive'
import { ButtonBase, Drawer, Link, MenuText } from 'design-system'
import { Bars } from 'design-system/Icon'
import { usePath } from 'hooks'

import LanguageSelector from '../LanguageSelector'
import { MenuContainer, MenuSideContainer, StyledMenuLink } from './styles'

export type MenuProps = {
  menu: {
    label: string
    path: string
  }[]
}

const Menu = () => {
  const { t } = useTranslation('menu')
  const { checkPath } = usePath()
  const { isDesktop } = useResponsiveContext()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const MenuLinks = () => (
    <>
      {map(getMenuLinks(t), ({ label, path }, index) => (
        <StyledMenuLink
          data-testid={`menu-link-${index}`}
          isActive={checkPath(path)}
          key={`menu-${label}`}
        >
          <Link isInherited href={path}>
            <MenuText>{label}</MenuText>
          </Link>
        </StyledMenuLink>
      ))}
    </>
  )

  useEffect(() => {
    setIsOpen(false)
  }, [router.pathname, setIsOpen])

  return (
    <MenuContainer>
      {isDesktop ? (
        <MenuLinks />
      ) : (
        <>
          <MenuSideContainer side="left">
            <ButtonBase data-testid="menu-mobile-drawer-button" onClick={() => setIsOpen(true)}>
              <Bars />
            </ButtonBase>
          </MenuSideContainer>
          <Drawer data-testid="menu-mobile-drawer" open={isOpen} onClose={() => setIsOpen(false)}>
            <MenuLinks />
          </Drawer>
        </>
      )}
      <MenuSideContainer side="right">
        <LanguageSelector />
      </MenuSideContainer>
    </MenuContainer>
  )
}

export default Menu
