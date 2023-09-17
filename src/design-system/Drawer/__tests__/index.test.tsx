import { useState } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'

import Button from '../../Button'
import Drawer from '..'

const TestDrawer = () => {
  const [open, setIsOpen] = useState(false)
  return (
    <TestWrapper>
      <Button onClick={() => setIsOpen(!open)}>Open Drawer</Button>
      <div style={{ position: 'absolute', zIndex: 99, width: '100px', height: '100px' }}>
        Click Outside
      </div>
      <Drawer di="f" h="400px" open={open} onClose={() => setIsOpen(false)}>
        Test Jest
      </Drawer>
    </TestWrapper>
  )
}

const TestPermanentDrawer = () => (
  <TestWrapper>
    <Drawer di="f" h="400px" open>
      Test Jest
    </Drawer>
  </TestWrapper>
)

describe('Drawer', () => {
  ;[
    {
      Component: TestDrawer,
      isPermanent: false,
    },
    {
      Component: TestPermanentDrawer,
      isPermanent: true,
    },
  ].forEach(({ Component, isPermanent }) => {
    const setup = () => {
      const utils = render(<Component />)
      const button = () => screen.queryByText('Open Drawer') as HTMLElement
      const drawer = () => screen.queryByText('Test Jest') as HTMLElement
      const outsideDiv = () => screen.queryByText('Click Outside') as HTMLElement
      return {
        button,
        drawer,
        outsideDiv,
        ...utils,
      }
    }

    describe(`${isPermanent ? 'Permanent' : 'Normal'} drawer`, () => {
      let setupData: ReturnType<typeof setup>
      beforeEach(() => {
        const data = setup()
        const { button, drawer, outsideDiv } = data

        if (!isPermanent) {
          expect(button()).toBeInTheDocument()
          expect(outsideDiv()).toBeInTheDocument()
          expect(drawer()).not.toBeInTheDocument()
          fireEvent.click(button())
        }

        setupData = data
      })

      it('renders the drawer correctly', () => {
        expect(setupData.drawer()).toBeInTheDocument()
      })

      it('renders the drawer as an aside node', () => {
        expect(setupData.drawer().nodeName).toBe('ASIDE')
      })

      it('contains Drawer CSS rules from injectors', () => {
        const { drawer } = setupData
        expect(drawer()).toHaveStyleRule('display', 'flex')
        expect(drawer()).toHaveStyleRule('height', '400px')
      })

      it('contains Drawer CSS theme rules', () => {
        const { drawer } = setupData
        expect(drawer()).toHaveStyleRule(
          'background-color',
          theme.components.drawer.backgroundColor,
        )
        expect(drawer()).toHaveStyleRule('width', theme.components.drawer.width)
      })
      if (!isPermanent) {
        it('closes Drawer correctly when clicking on the button again', async () => {
          const { button, drawer } = setupData
          fireEvent.click(button())
          await waitFor(() => expect(drawer()).not.toBeInTheDocument())
        })
      }
    })
  })
})
