import React from 'react'
import { Meta } from '@storybook/react'

import ImageSwiper, { ImageSwiperProps } from '../'

const Main = ({ images, imgUrlPrefix }: ImageSwiperProps) => {
  return <ImageSwiper images={images} imgUrlPrefix={imgUrlPrefix} />
}

export default {
  component: ImageSwiper,
  title: 'Components/Image Swiper',
  args: {
    images: ['logo.png', 'logo.png', 'logo.png', 'logo.png', 'logo.png'],
    imgUrlPrefix: '/images/portfolio/regate/',
  },
  argTypes: {
    images: {
      control: { type: 'object' },
      description: 'images - accepts array of image urls',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: `string[]` },
      },
    },
    imgUrlPrefix: {
      control: { type: 'text' },
      description: 'imgUrlPrefix - accepts string from ImageUrlPrefixes type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: `/images/` },
      },
    },
  },
} as Meta

export { Main as ImageSwiper }
