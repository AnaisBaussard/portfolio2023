import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'

import { getMenuLinks } from 'config/menuLinks'
import { useResponsiveContext } from 'context/Responsive'
import { TestWrapper } from 'tests/utils'

import Menu from '..'

jest.mock('next/router')
const mockedUseRouter = useRouter as jest.Mock

jest.mock('context/Responsive')
const mockedUseResponsiveContext = useResponsiveContext as jest.Mock

const TestMenu = () => {
  return (
    <TestWrapper>
      <Menu />
    </TestWrapper>
  )
}

describe('Menu', () => {
  const setup = () => {
    const utils = render(<TestMenu />)
    const drawer = () => screen.queryByTestId('menu-mobile-drawer')
    const drawerButton = () => screen.queryByTestId('menu-mobile-drawer-button') as HTMLElement
    const languageSelector = () => utils.container.querySelector('#language-selector')
    const links = () => screen.queryAllByTestId(`menu-link`, { exact: false })
    const menu = () => utils.container.firstChild
    return {
      drawer,
      drawerButton,
      languageSelector,
      links,
      menu,
      ...utils,
    }
  }

  ;[
    {
      isDesktop: true,
    },
    {
      isDesktop: false,
    },
  ].forEach(({ isDesktop }) => {
    describe(`${isDesktop ? 'Desktop' : 'Mobile'} Menu`, () => {
      let setupData: ReturnType<typeof setup>
      beforeEach(() => {
        mockedUseRouter.mockImplementation(() => {
          return {
            pathname: '/',
          }
        })
        mockedUseResponsiveContext.mockImplementation(() => {
          return {
            isDesktop,
          }
        })
        const data = setup()
        setupData = data
      })

      it('renders correctly', () => {
        const { menu } = setupData
        expect(menu()).toBeInTheDocument()
      })

      it('renders as a menu node', () => {
        const { menu } = setupData
        expect(menu()?.nodeName).toBe('MENU')
      })

      it(`${isDesktop ? 'Does not' : 'Does'} contain a drawer button`, () => {
        const { drawerButton } = setupData
        if (isDesktop) {
          expect(drawerButton()).not.toBeInTheDocument()
        } else {
          expect(drawerButton()).toBeInTheDocument()
        }
      })

      // Opens the drawer in mobile mode
      beforeEach(() => {
        const { drawerButton, drawer } = setupData
        expect(drawer()).not.toBeInTheDocument()
        if (drawerButton()) {
          fireEvent.click(drawerButton())
          expect(drawer()).toBeInTheDocument()
        }
      })

      it('renders links as li nodes containing a nodes', () => {
        const { links } = setupData
        expect(links()).toEqual(expect.arrayContaining([expect.any(HTMLElement)]))

        links().forEach((link: HTMLElement) => {
          expect(link).toBeInTheDocument()
          expect(link?.nodeName).toBe('LI')
          expect(link?.firstChild?.nodeName).toBe('A')
        })
      })

      it('links contain href with the correct urls', () => {
        const { links } = setupData
        const menuLinks = getMenuLinks(jest.fn())

        expect(links()).toEqual(expect.arrayContaining([expect.any(HTMLElement)]))

        links().forEach((link: HTMLElement, index: number) => {
          expect(link?.firstChild).toHaveAttribute('href', menuLinks[index].path)
        })
      })

      it('contains the language selector dropdown', () => {
        const { languageSelector } = setupData
        expect(languageSelector()).toBeInTheDocument()
      })

      it('link who matches the path should be underlined by default', () => {
        const { links } = setupData
        expect(links()).toEqual(expect.arrayContaining([expect.any(HTMLElement)]))

        links().forEach(link => {
          const linkChild = link.firstChild as HTMLLinkElement
          // current path is the default one
          if (linkChild.href === document.location.href) {
            expect(link).toHaveStyleRule('left', '0%', {
              modifier: '::after',
            })
          } else {
            expect(link).toHaveStyleRule('left', '100%', {
              modifier: '::after',
            })
          }
        })
      })
    })
  })
})
