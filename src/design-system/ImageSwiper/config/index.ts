import { SwiperOptions } from 'swiper'

export const imageSwiperBreakpoints: SwiperOptions['breakpoints'] = {
  '@0.00': {
    slidesPerView: 'auto',
    spaceBetween: 10,
  },
  '@0.75': {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '@1.00': {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  '@1.50': {
    slidesPerView: 4,
    spaceBetween: 50,
  },
  '@2.00': {
    slidesPerView: 5,
    spaceBetween: 50,
  },
}
