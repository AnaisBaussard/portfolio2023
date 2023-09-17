import { createContext, useCallback, useContext, useEffect, useReducer } from 'react'
import { useTheme } from 'styled-components'

export type ResponsiveContextState = {
  isDesktop: boolean
  isMobile: boolean
  isNotMobile: boolean
  isTablet: boolean
}

export const ResponsiveContext = createContext({} as ResponsiveContextState)

export function useResponsiveContext() {
  const context = useContext(ResponsiveContext)
  if (context === undefined) {
    throw new Error(`useAuthContext must be used within a ResponsiveProvider`)
  }

  return context
}

type State = {
  isDesktop: boolean
  isMobile: boolean
  isTablet: boolean
}

type Action = {
  state: boolean
  screenSize: ScreenSize
}

function reducer(state: State, action: Action) {
  switch (action.screenSize) {
    case 'lg':
    case 'mdLg':
      return {
        isDesktop: true,
        isMobile: false,
        isTablet: false,
      }
    case 'md':
      return {
        isDesktop: false,
        isMobile: false,
        isTablet: true,
      }
    case 'sm':
      return {
        isDesktop: false,
        isMobile: true,
        isTablet: false,
      }
    default:
      return state
  }
}

type Props = {
  children: React.ReactNode
}

/*
 * We do not use resize event listeners here because they don't work properly on first load
 * (components wouldn't render correctly).
 */
export default function ResponsiveProvider(props: Props) {
  const { breakpoints } = useTheme()
  const [{ isDesktop, isMobile, isTablet }, dispatch] = useReducer(reducer, {
    isDesktop: false,
    isMobile: false,
    isTablet: false,
  })
  const isNotMobile = isDesktop || isTablet

  const onMediaMatchChange = useCallback((e: MediaQueryListEvent, screenSize: ScreenSize) => {
    if (e.matches) {
      dispatch({ state: true, screenSize })
    }
  }, [])

  useEffect(() => {
    const matchDesktopBreakpoint = window.matchMedia(`(min-width: ${breakpoints.mdLg.minWidth}px)`)
    const matchTabletBreakpoint = window.matchMedia(
      `(min-width: ${breakpoints.md.minWidth}px) and (max-width: ${breakpoints.md.maxWidth}px)`,
    )
    const matchMobileBreakpoint = window.matchMedia(`(max-width: ${breakpoints.sm.maxWidth}px)`)

    matchDesktopBreakpoint.addListener(e => {
      return onMediaMatchChange(e, 'mdLg')
    })
    matchTabletBreakpoint.addListener(e => {
      return onMediaMatchChange(e, 'md')
    })
    matchMobileBreakpoint.addListener(e => {
      return onMediaMatchChange(e, 'sm')
    })

    // Check on mount (callback is not called until a change occurs)
    if (matchDesktopBreakpoint.matches) {
      dispatch({ state: true, screenSize: 'mdLg' })
    }
    if (matchTabletBreakpoint.matches) {
      dispatch({ state: true, screenSize: 'md' })
    }
    if (matchMobileBreakpoint.matches) {
      dispatch({ state: true, screenSize: 'sm' })
    }

    return () => {
      matchDesktopBreakpoint.removeListener(e => {
        return onMediaMatchChange(e, 'mdLg')
      })
      matchTabletBreakpoint.removeListener(e => {
        return onMediaMatchChange(e, 'md')
      })
      matchMobileBreakpoint.removeListener(e => {
        return onMediaMatchChange(e, 'sm')
      })
    }
  }, [breakpoints, onMediaMatchChange])

  return (
    <ResponsiveContext.Provider value={{ isDesktop, isMobile, isNotMobile, isTablet }} {...props} />
  )
}
