import { useCallback, useRef } from 'react'
import { useTransition } from 'react-spring'
import { useTheme } from 'styled-components'

import { ContainerProps, DisplayProps } from 'design-system/injectors'
import { useClickInside } from 'hooks'

import DrawerContainer from './styles/DrawerContainer'

export type DrawerProps = {
  buttonRef?: React.RefObject<HTMLElement>
  children: React.ReactNode
  onClose?: () => void
  open?: boolean
} & ContainerProps &
  DisplayProps

const Drawer = ({ buttonRef, onClose, open, ...props }: DrawerProps) => {
  const theme = useTheme()
  const drawerRef = useRef<HTMLDivElement | null>(null)
  const transitions = useTransition(open, null, {
    from: {
      transform: `translateX(-${theme.components.drawer.width})`,
    },
    enter: { transform: 'translateX(0)' },
    leave: {
      transform: `translateX(-${theme.components.drawer.width})`,
    },
  })

  const handleClose = useCallback(() => {
    onClose?.()
  }, [onClose])

  useClickInside([drawerRef, ...(buttonRef ? [buttonRef] : [])], handleClose)

  return (
    <>
      {transitions.map(
        ({ key, item, props: style }) =>
          item && <DrawerContainer {...props} key={key} ref={drawerRef} style={style} />,
      )}
    </>
  )
}

export default Drawer
