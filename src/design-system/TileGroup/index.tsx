import React from 'react'
import { useTheme } from 'styled-components'
import { map } from 'lodash'

import Div from '../Div'
import { DisplayProps } from '../injectors'
import Tile, { TileProps } from '../Tile'

export type TileGroupProps = {
  jc?: DisplayProps['jc']
  mode?: TileProps['mode']
  tilePerRow?: number
  tiles: TileProps[]
}

const TileGroup = ({ jc = 'ce', mode = 'default', tilePerRow, tiles }: TileGroupProps) => {
  const theme = useTheme()

  const maxW = tilePerRow
    ? `calc((${theme.components.tile[mode].width} * ${tilePerRow}) + (${theme.sizes[1]} * ${
        tilePerRow - 1
      }))`
    : undefined

  return (
    <Div di="f" fw="w" g={1} jc={jc} maxW={maxW} ml="auto" mr="auto">
      {map(tiles, (props, index) => (
        <Tile data-testid={`tile-${index}`} key={`tile-${index}`} mode={mode} {...props} />
      ))}
    </Div>
  )
}

export default TileGroup
