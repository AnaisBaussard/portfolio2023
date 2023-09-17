import { useTheme } from 'styled-components'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'

SwiperCore.use([Navigation])

import { map } from 'lodash'

import Image from '../Image'
import { imageSwiperBreakpoints } from './config'
import { SwiperContainer } from './styles'

export type ImageSwiperProps = {
  images: string[]
  imgUrlPrefix?: string
}

const ImageSwiper = ({ images, imgUrlPrefix }: ImageSwiperProps) => {
  const theme = useTheme()
  return (
    <SwiperContainer>
      <Swiper
        breakpoints={imageSwiperBreakpoints}
        grabCursor
        navigation
        slidesPerView="auto"
        spaceBetween={10}
      >
        {map(images, (imgUrl, index) => (
          <SwiperSlide key={`swiper-image-${index}`} style={{ width: '80%' }}>
            <Image
              data-testid={`swiper-image-${index}`}
              maxW={theme.components.imageSwiper.maxWidth}
              src={imgUrlPrefix ? `${imgUrlPrefix}${imgUrl}` : imgUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  )
}

export default ImageSwiper
