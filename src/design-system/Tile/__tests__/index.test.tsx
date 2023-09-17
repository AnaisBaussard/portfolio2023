import { render } from '@testing-library/react'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'
import Tile, { TileContainerProps } from '..'

const TestTileWithImage = () => {
  return (
    <TestWrapper>
      <Tile
        color="secondary"
        di="f"
        gradient="regate"
        href="/href"
        imgAlt="regate-logo"
        imgTileSrc="/images/regate-white.png"
        mb={0.75}
        w="100%"
        weight="700"
      />
    </TestWrapper>
  )
}

const TestTileWithText = () => {
  return (
    <TestWrapper>
      <Tile
        color="secondary"
        di="f"
        gradient="regate"
        href="/href"
        mb={0.75}
        text="Test Jest"
        w="100%"
        weight="700"
      />
    </TestWrapper>
  )
}

const TestTileSmall = () => {
  return (
    <TestWrapper>
      <Tile
        color="secondary"
        di="f"
        gradient="regate"
        href="/href"
        imgAlt="regate-logo"
        imgTileSrc="/images/regate-white.png"
        mb={0.75}
        mode="small"
        w="100%"
        weight="700"
      />
    </TestWrapper>
  )
}

const TestTileIcon = () => {
  return (
    <TestWrapper>
      <Tile
        color="secondary"
        di="f"
        gradient="regate"
        href="/href"
        imgAlt="regate-logo"
        iconSrc="/images/regate-white.png"
        mb={0.75}
        mode="icon"
        w="100%"
        weight="700"
      />
    </TestWrapper>
  )
}

describe('Tile component', () => {
  ;[
    {
      Component: TestTileWithImage,
      mode: 'default',
      withText: false,
    },
    {
      Component: TestTileWithText,
      mode: 'default',
      withText: true,
    },
    {
      Component: TestTileSmall,
      mode: 'small',
      withText: false,
    },
    {
      Component: TestTileIcon,
      mode: 'icon',
      withText: false,
    },
  ].forEach(({ Component, mode, withText }) => {
    const setup = () => {
      const utils = render(<Component />)
      const tileContainer = () => utils.container.firstChild as HTMLElement
      const tileLink = () => utils.container.firstChild?.firstChild as HTMLElement
      const tile = () => utils.container.firstChild?.firstChild?.firstChild as HTMLElement
      const tileChild = () =>
        utils.container.firstChild?.firstChild?.firstChild?.firstChild as HTMLElement
      return {
        tile,
        tileChild,
        tileContainer,
        tileLink,
        ...utils,
      }
    }

    it('renders correctly', () => {
      const { tileChild } = setup()
      expect(tileChild()).toBeInTheDocument()
    })

    it('tile and its container render as div nodes', () => {
      const { tile, tileContainer } = setup()
      expect(tile().nodeName).toBe('DIV')
      expect(tileContainer().nodeName).toBe('DIV')
    })

    it('tile link renders as an a node with an href', () => {
      const { tileLink } = setup()
      expect(tileLink().nodeName).toBe('A')
      expect(tileLink()).toHaveAttribute('href', '/href')
    })

    it(`tile height and width correspond to the ${mode} sizes`, () => {
      const { tile } = setup()
      expect(tile()).toHaveStyleRule(
        'height',
        theme.components.tile[mode as TileContainerProps['mode']].height,
      )
      expect(tile()).toHaveStyleRule(
        'width',
        theme.components.tile[mode as TileContainerProps['mode']].width,
      )
    })

    it(`child component renders as ${withText ? 'h2' : 'img'} node`, () => {
      const { tileChild } = setup()
      expect(tileChild().nodeName).toBe(withText ? 'H2' : 'IMG')
    })

    it('contains props CSS rules', () => {
      const { tile } = setup()
      expect(tile()).toHaveStyleRule('background-color', theme.colors.secondary)
      expect(tile()).toHaveStyleRule('background', 'linear-gradient(90deg,#01589F 0%,#004884 100%)')
    })

    it('contains injector CSS rules', () => {
      const { tileContainer } = setup()
      expect(tileContainer()).toHaveStyleRule('font-weight', '700')
      expect(tileContainer()).toHaveStyleRule('display', 'flex')
      expect(tileContainer()).toHaveStyleRule('width', '100%')
      expect(tileContainer()).toHaveStyleRule('margin-bottom', '0.75rem')
    })
  })
})
