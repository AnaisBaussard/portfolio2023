import styled from 'styled-components'

const SwiperContainer = styled.div`
  ${({ theme }) => `
    .swiper-button-next, .swiper-button-prev {
      color: ${theme.colors.lighterGrey};
    }
  `}
`

export default SwiperContainer
