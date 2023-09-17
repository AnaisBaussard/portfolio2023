import { render, screen } from '@testing-library/react'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'
import { Cell, Grid } from '..'

const TestGrid = () => {
  return (
    <TestWrapper>
      <Grid mdTCols="1fr" smTAreas='"header header" "content sidebar"' tRows="60px 1fr">
        <Cell $cols={3} area="header" mdRows={6} smCols={12}>
          Test Jest
        </Cell>
      </Grid>
    </TestWrapper>
  )
}

const TestGridWithoutSpanning = () => {
  return (
    <TestWrapper>
      <Grid>
        <Cell $cols="1 / 5" $rows={3} noSpanning>
          Test Jest
        </Cell>
      </Grid>
    </TestWrapper>
  )
}

describe('Grid component', () => {
  it('renders correctly', () => {
    render(<TestGrid />)
    expect(screen.queryByText('Test Jest')).toBeInTheDocument()
  })

  it('contains Grid CSS rules', () => {
    const { container } = render(<TestGrid />)
    expect(container.firstChild).toHaveStyleRule('display', 'grid')
    expect(container.firstChild).toHaveStyleRule('grid-template-rows', '60px 1fr')
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-columns',
      theme.components.grid.gridTemplateColumns,
    )
  })

  it('generates Grid media queries correctly', () => {
    const { container } = render(<TestGrid />)
    expect(container.firstChild).toHaveStyleRule('grid-template-columns', '1fr', {
      media: `only screen and (max-width: ${theme.breakpoints.md.maxWidth}px)`,
    })
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      '"header header" "content sidebar"',
      {
        media: `only screen and (max-width: ${theme.breakpoints.sm.maxWidth}px)`,
      },
    )
  })

  it('contains Cell CSS rules', () => {
    const { container } = render(<TestGrid />)
    expect(container.firstChild?.firstChild).toHaveStyleRule('grid-area', 'header')
    expect(container.firstChild?.firstChild).toHaveStyleRule('grid-column', 'span 3')
  })

  it('generates Cell media queries correctly', () => {
    const { container } = render(<TestGrid />)
    expect(container.firstChild?.firstChild).toHaveStyleRule('grid-row', 'span 6', {
      media: `only screen and (max-width: ${theme.breakpoints.md.maxWidth}px)`,
    })
    expect(container.firstChild?.firstChild).toHaveStyleRule('grid-column', 'span 12', {
      media: `only screen and (max-width: ${theme.breakpoints.sm.maxWidth}px)`,
    })
  })

  it('contains correct grid-column and grid-row values when noSpanning is false', () => {
    const { container } = render(<TestGridWithoutSpanning />)
    expect(container.firstChild?.firstChild).toHaveStyleRule('grid-column', '1 / 5')
    expect(container.firstChild?.firstChild).toHaveStyleRule('grid-row', '3')
  })
})
