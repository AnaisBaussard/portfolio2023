import React from 'react'
import styled from 'styled-components'
import { addDecorator } from '@storybook/react'

import { StyleProvider } from 'design-system'

const StoryContainer = styled.div`
  ${({ theme }) => `
    padding: ${theme.sizes[0.5]} ${theme.sizes[1]};
  `}
`

addDecorator(storyFn => (
  <StyleProvider>
    <StoryContainer>{storyFn()}</StoryContainer>
  </StyleProvider>
))

const viewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '480px',
      height: '896px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '963px',
    },
  },
}

export const parameters = {
  controls: {
    expanded: true,
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
  viewport: {
    viewports,
  },
}
