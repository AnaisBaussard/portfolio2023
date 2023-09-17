import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useRouter } from 'next/router'

import { TestWrapper } from 'tests/utils'

import LanguageSelector from '..'

jest.mock('next/router')
const mockedUseRouter = useRouter as jest.Mock

const TestLanguageSelector = () => {
  return (
    <TestWrapper>
      <LanguageSelector />
    </TestWrapper>
  )
}

describe('LanguageSelector', () => {
  const setup = () => {
    const utils = render(<TestLanguageSelector />)
    const input = () => screen.queryByText('Select...') as HTMLElement
    const select = () => utils.container.firstChild as HTMLElement
    return {
      input,
      select,
      ...utils,
    }
  }

  beforeEach(() => {
    mockedUseRouter.mockImplementation(() => {
      return {
        pathname: '/',
        locales: ['en', 'fr'],
        locale: null,
        push: jest.fn(),
      }
    })
  })

  it('renders correctly', () => {
    const { select } = setup()
    expect(select()).toBeInTheDocument()
  })

  it('contains locales as values', async () => {
    const { input } = setup()

    expect(screen.queryByText('EN')).not.toBeInTheDocument()
    expect(screen.queryByText('FR')).not.toBeInTheDocument()

    const DOWN_ARROW = { keyCode: 40 }
    fireEvent.keyDown(input() as Element, DOWN_ARROW)

    await waitFor(() => screen.queryByText('EN'))
    expect(screen.queryByText('EN')).toBeInTheDocument()
    await waitFor(() => screen.queryByText('FR'))
    expect(screen.queryByText('FR')).toBeInTheDocument()

    fireEvent.click(screen.queryByText('FR') as Element)
    expect(screen.queryByText('EN')).not.toBeInTheDocument()
    expect(screen.queryByText('FR')).toBeInTheDocument()
  })

  describe('when locale is defined', () => {
    beforeEach(() => {
      mockedUseRouter.mockImplementation(() => {
        return {
          pathname: '/',
          locales: ['en', 'fr'],
          locale: 'en',
          push: jest.fn(),
        }
      })
    })

    it('has the current locale as default value', () => {
      setup()
      expect(screen.queryByText('EN')).toBeInTheDocument()
    })
  })
})
