import { fireEvent, render, screen } from '@testing-library/react'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'
import Input, { InputProps } from '..'

const TestInput = (props: InputProps) => (
  <TestWrapper>
    <Input
      data-testid="input-jest"
      defaultValue="Jest default value"
      placeholder="Jest placeholder"
      {...props}
    />
  </TestWrapper>
)

describe('Input', () => {
  ;[
    {
      Component: () => TestInput({ id: 'input', name: 'input' }),
      hasError: false,
      hasLabel: false,
      name: 'Input',
      node: 'INPUT',
    },
    {
      Component: () =>
        TestInput({
          errors: [{ message: 'Jest error message', type: 'Jest' }],
          id: 'input-error',
          name: 'input-error',
        }),
      hasError: true,
      hasLabel: false,
      name: 'Input with error',
      node: 'INPUT',
    },
    {
      Component: () =>
        TestInput({
          errors: [{ message: 'Jest error message', type: 'Jest' }],
          id: 'input-error',
          label: 'Jest label',
          name: 'input-error',
        }),
      hasError: true,
      hasLabel: true,
      name: 'Input with label & error',
      node: 'INPUT',
    },
    {
      Component: () => TestInput({ id: 'textarea', name: 'textarea', variant: 'textarea' }),
      hasError: false,
      hasLabel: false,
      name: 'Textarea',
      node: 'TEXTAREA',
    },
    {
      Component: () =>
        TestInput({
          errors: [{ message: 'Jest error message', type: 'Jest' }],
          id: 'textarea-error',
          name: 'textarea-error',
          variant: 'textarea',
        }),
      hasError: true,
      hasLabel: false,
      name: 'Textarea with error',
      node: 'TEXTAREA',
    },
    {
      Component: () =>
        TestInput({
          id: 'textarea-error',
          label: 'Jest label',
          name: 'textarea-error',
          variant: 'textarea',
        }),
      hasError: false,
      hasLabel: true,
      name: 'Textarea with label',
      node: 'TEXTAREA',
    },
  ].forEach(({ Component, hasError, hasLabel, name, node }) => {
    const setup = () => {
      const utils = render(<Component />)
      const input = utils.getByTestId('input-jest') as HTMLElement & { value: string }
      return {
        input,
        ...utils,
      }
    }

    describe(name, () => {
      it(`renders correctly and as a ${node} node`, () => {
        const { input } = setup()
        expect(input).toBeInTheDocument()
        expect(input?.nodeName).toBe(node)
      })

      it(`has the correct placeholder`, () => {
        const { input } = setup()
        expect(input).toHaveAttribute('placeholder', 'Jest placeholder')
      })

      it(`changes its value correctly`, () => {
        const { input } = setup()
        expect(input.value).toBe('Jest default value')
        fireEvent.change(input, { target: { value: 'Jest new value' } })
        expect(input.value).toBe('Jest new value')
      })

      it(`${hasError ? 'does' : 'does not'} render the correct error message`, () => {
        setup()
        if (hasError) {
          expect(screen.queryByText('Jest error message')).toBeInTheDocument()
        } else {
          expect(screen.queryByText('Jest error message')).not.toBeInTheDocument()
        }
      })

      it(`${hasLabel ? 'does' : 'does not'} render the correct label message`, () => {
        setup()
        if (hasLabel) {
          expect(screen.queryByText('Jest label')).toBeInTheDocument()
        } else {
          expect(screen.queryByText('Jest label')).not.toBeInTheDocument()
        }
      })

      it('contains theme & styled component CSS rules', () => {
        const { input } = setup()
        expect(input).toHaveStyleRule('background-color', theme.components.input.backgroundColor)
        if (hasError) {
          expect(input).toHaveStyleRule(
            'border',
            `1px solid ${theme.components.input.error.borderColor}`,
          )
        } else {
          expect(input).toHaveStyleRule('border', `1px solid ${theme.components.input.borderColor}`)
        }
        expect(input).toHaveStyleRule(
          'border',
          `1px solid ${theme.components.input.focus.borderColor}`,
          {
            modifier: ':focus',
          },
        )
        expect(input).toHaveStyleRule('border-radius', theme.components.input.borderRadius)
      })
    })
  })
})
