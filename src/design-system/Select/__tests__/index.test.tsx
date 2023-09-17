import { fireEvent, render, waitFor, screen } from '@testing-library/react'

import { TestWrapper } from 'tests/utils'
import Select from '..'

const DOWN_ARROW = { keyCode: 40 }

const testOptions = [
  {
    label: 'Jest 1',
    value: 'jest1',
  },
  {
    label: 'Jest 2',
    value: 'jest2',
  },
  {
    label: 'Jest 3',
    value: 'jest3',
  },
]

const TestSelectDefault = () => (
  <TestWrapper>
    <Select options={testOptions} />
  </TestWrapper>
)

const TestSelectMulti = () => (
  <TestWrapper>
    <Select isMulti options={testOptions} />
  </TestWrapper>
)

const TestSelectMinimal = () => (
  <TestWrapper>
    <Select options={testOptions} variant="minimal" />
  </TestWrapper>
)

describe('Select', () => {
  ;[
    {
      Component: TestSelectDefault,
      labelToClick: 'Jest 1',
    },
    {
      Component: TestSelectDefault,
      labelToClick: 'Jest 2',
    },
    {
      Component: TestSelectMulti,
      isMulti: true,
      labelToClick: 'Jest 1',
    },
    {
      Component: TestSelectMulti,
      isMulti: true,
      labelToClick: 'Jest 2',
    },
    {
      Component: TestSelectMinimal,
      isMinimal: true,
      labelToClick: 'Jest 1',
    },
    {
      Component: TestSelectMinimal,
      isMinimal: true,
      labelToClick: 'Jest 2',
    },
  ].forEach(({ Component, isMinimal, isMulti, labelToClick }) => {
    const getSelectItem = async (label: string) => {
      fireEvent.keyDown(
        isMinimal
          ? (screen.queryByText('Select...') as Element)
          : (screen.queryByTestId('select-input') as Element),
        DOWN_ARROW,
      )
      await waitFor(() => screen.queryByText(label))
      fireEvent.click(screen.queryByText(label) as Element)
    }

    if (!isMulti) {
      describe('Non multi select', () => {
        it(`${
          isMinimal ? 'Minimal input ' : ''
        }renders and values can be filled then submitted`, async () => {
          render(<Component />)

          await getSelectItem(labelToClick)
          expect(screen.queryByText(labelToClick)).toBeInTheDocument()
        })
      })
    } else {
      describe('Multi select', () => {
        const removeMultiItem = async (label: string) => {
          fireEvent.click(screen.queryByText(label)?.parentNode?.childNodes[1] as Element)
        }

        it('Multi input can add multiple values and remove them correctly', async () => {
          render(<Component />)

          await getSelectItem(labelToClick)
          await getSelectItem('Jest 3')
          expect(screen.queryByText(labelToClick)).toBeInTheDocument()
          expect(screen.queryByText('Jest 3')).toBeInTheDocument()

          await removeMultiItem('Jest 3')
          expect(screen.queryByText('Jest 3')).not.toBeInTheDocument()
        })
      })
    }
  })
})
