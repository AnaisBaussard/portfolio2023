import { render, screen } from '@testing-library/react'

import { getMenuLinks } from 'config/menuLinks'
import { useResponsiveContext } from 'context/Responsive'
import { TestWrapper } from 'tests/utils'

import Menu from '..'

jest.mock('context/Responsive')
const mockedUseResponsiveContext = useResponsiveContext as jest.Mock

const TestMenu = () => {
  return (
    <TestWrapper>
      <Menu />
    </TestWrapper>
  )
}

describe('Footer', () => {
  const setup = () => {
    const utils = render(<TestMenu />)
    const links = () => screen.queryAllByTestId(`menu-link`, { exact: false })
    const footer = () => utils.container.firstChild
    return {
      links,
      footer,
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
    describe(`${isDesktop ? 'Desktop' : 'Mobile'} Footer`, () => {
      let setupData: ReturnType<typeof setup>
      beforeEach(() => {
        mockedUseResponsiveContext.mockImplementation(() => {
          return {
            isDesktop,
          }
        })
        const data = setup()
        setupData = data
      })

      it('renders correctly', () => {
        const { footer } = setupData
        expect(footer()).toBeInTheDocument()
      })

      it('renders as a footer node', () => {
        const { footer } = setupData
        expect(footer()?.nodeName).toBe('FOOTER')
      })

      it(`${isDesktop ? 'Does' : 'Does not'} contain links`, () => {
        const { links } = setupData
        if (isDesktop) {
          expect(links()).toEqual(expect.arrayContaining([expect.any(HTMLElement)]))
        } else {
          expect(links()).toEqual([])
        }
      })

      if (isDesktop) {
        it('renders links as a nodes', () => {
          const { links } = setupData
          expect(links()).toEqual(expect.arrayContaining([expect.any(HTMLElement)]))

          links().forEach((link: HTMLElement) => {
            expect(link).toBeInTheDocument()
            expect(link?.nodeName).toBe('A')
          })
        })

        it('links contain href with the correct urls', () => {
          const { links } = setupData
          const menuLinks = getMenuLinks(jest.fn())

          expect(links()).toEqual(expect.arrayContaining([expect.any(HTMLElement)]))

          links().forEach((link: HTMLElement, index: number) => {
            expect(link).toHaveAttribute('href', menuLinks[index].path)
          })
        })
      }
    })
  })
})
