import { Theme } from 'styled-components'

import { ContainerProps, DisplayProps, SizeProps, TextProps } from '../injectors'
import Div from '../Div'
import Image from '../Image'
import Link from '../Link'
import { Title } from '../Typography'

import { TileContainer } from './styles'

export type TileProps = {
  href: Experience['href']
  iconSrc?: Experience['iconSrc']
  imgAlt?: Experience['imgAlt']
  imgTileSrc?: Experience['imgTileSrc']
  mode?: TileContainerProps['mode']
  text?: Experience['text']
} & Omit<TileContainerProps, 'mode'>

export type TileContainerProps = {
  color?: keyof Theme['colors'] | string
  gradient?: keyof Theme['gradients'] | string
  mode: 'default' | 'icon' | 'small'
} & ContainerProps &
  DisplayProps &
  SizeProps &
  TextProps

const Tile = ({
  color,
  gradient,
  href,
  iconSrc,
  imgAlt,
  imgTileSrc,
  mode = 'default',
  text,
  ...props
}: TileProps) => {
  return (
    <Div {...props}>
      <Link href={href} isInherited isUnderlined={false}>
        <TileContainer color={color} gradient={gradient} mode={mode}>
          {text && <Title mode="small">{text}</Title>}
          {mode === 'icon' && iconSrc && <Image alt={imgAlt} src={iconSrc} />}
          {mode !== 'icon' && imgTileSrc && <Image alt={imgAlt} src={imgTileSrc} />}
        </TileContainer>
      </Link>
    </Div>
  )
}

export default Tile
