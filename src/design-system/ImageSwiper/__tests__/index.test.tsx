import { render, screen } from '@testing-library/react'
import { map, range } from 'lodash'

import theme from 'config/theme'
import { TestWrapper } from 'tests/utils'

import ImageSwiper from '../'

const TestImageSwiper = () => (
  <TestWrapper>
    <ImageSwiper
      images={map(range(6), () => `logo.png`)}
      imgUrlPrefix="/images/portfolio/regate/"
    />
  </TestWrapper>
)

describe('ImageSwiper', () => {
  const setup = () => {
    const utils = render(<TestImageSwiper />)
    const imageSwiper = () => utils.container.firstChild?.firstChild
    const images = () => screen.queryAllByTestId(`swiper-image`, { exact: false })
    return {
      imageSwiper,
      images,
      ...utils,
    }
  }

  it('renders correctly', () => {
    const { imageSwiper } = setup()
    expect(imageSwiper()).toBeInTheDocument()
  })

  it(`renders with 6 images`, () => {
    const { images } = setup()
    expect(images()).toEqual(expect.arrayContaining([expect.any(HTMLElement)]))
    expect(images()).toHaveLength(6)
  })

  it(`images render as img nodes`, () => {
    const { images } = setup()
    images().forEach((image: HTMLElement) => {
      expect(image.nodeName).toBe('IMG')
    })
  })

  it(`images have the correct max-width given from ImageSwiper theme`, () => {
    const { images } = setup()
    images().forEach((image: HTMLElement) => {
      expect(image).toHaveStyleRule('max-width', theme.components.imageSwiper.maxWidth)
    })
  })

  it(`images have the correct url with imgUrlPrefix`, () => {
    const { images } = setup()
    images().forEach((image: HTMLElement) => {
      expect(image).toHaveAttribute('src', `/images/portfolio/regate/logo.png`)
    })
  })
})
