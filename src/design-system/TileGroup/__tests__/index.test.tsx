import { render, screen } from '@testing-library/react'

import { experiences } from 'config/experience'
import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'

import TileGroup, { TileGroupProps } from '../'

describe('TileGroup', () => {
  const testCases: Partial<TileGroupProps>[] = [
    {
      mode: 'default',
      tilePerRow: undefined,
    },
    {
      mode: 'small',
      tilePerRow: undefined,
    },
    {
      mode: 'icon',
      tilePerRow: undefined,
    },
    {
      mode: 'default',
      tilePerRow: 3,
    },
    {
      mode: 'small',
      tilePerRow: 6,
    },
    {
      mode: 'icon',
      tilePerRow: 9,
    },
  ]

  testCases.forEach(props => {
    const mode = props.mode || 'default'
    describe(`${mode} TileGroup${
      props.tilePerRow ? ` with ${props.tilePerRow} tiles per row` : ''
    }`, () => {
      const setup = () => {
        const utils = render(
          <TestWrapper>
            <TileGroup tiles={experiences} {...props} />
          </TestWrapper>,
        )
        const tileGroupContainer = () => utils.container.firstChild
        const tiles = () => screen.queryAllByTestId(`tile`, { exact: false })
        return {
          tileGroupContainer,
          tiles,
          ...utils,
        }
      }

      it(`renders correctly with ${experiences.length} tiles`, () => {
        const { tileGroupContainer, tiles } = setup()
        expect(tileGroupContainer()).toBeInTheDocument()
        expect(tiles()).toEqual(expect.arrayContaining([expect.any(HTMLElement)]))
        expect(tiles()).toHaveLength(experiences.length)
      })

      it(`renders each tile with the ${props.mode} width and height`, () => {
        const { tiles } = setup()
        tiles().forEach((tile: HTMLElement) => {
          const tileContainer = tile.firstChild?.firstChild
          expect(tileContainer).toHaveStyleRule('height', theme.components.tile[mode].height)
          expect(tileContainer).toHaveStyleRule('width', theme.components.tile[mode].width)
        })
      })

      if (props.tilePerRow) {
        it(`TileGroup container has ${props.tilePerRow} times a tile's width + its gap as max-width if the prop is defined`, () => {
          const { tileGroupContainer } = setup()
          expect(tileGroupContainer()).toHaveStyleRule(
            'max-width',
            `calc((${theme.components.tile[mode].width} * ${props.tilePerRow}) + (1rem * ${
              (props.tilePerRow || 0) - 1
            }))`,
          )
        })
      }
    })
  })
})
