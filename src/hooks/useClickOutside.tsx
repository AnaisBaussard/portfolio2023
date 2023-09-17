import { useEffect } from 'react'
import { forEach, isArray } from 'lodash'

import { isClickInside } from 'helpers/mouseEvents'

const useClickInside = (
  refs: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
  onClickOutside: () => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (isArray(refs)) {
        let clickInside = false
        forEach(refs, ref => {
          if (
            ref?.current &&
            ref.current.contains &&
            ref.current.contains(event.target as Node) &&
            isClickInside(event, ref)
          ) {
            clickInside = true
          }
        })
        !clickInside && onClickOutside()
      } else if (
        refs?.current &&
        refs.current.contains &&
        !refs.current.contains(event.target as Node) &&
        !isClickInside(event, refs)
      ) {
        onClickOutside()
      }
    }

    document.addEventListener('mousedown', listener, false)

    return () => {
      document.removeEventListener('mousedown', listener, false)
    }
  }, [refs, onClickOutside])
}

export default useClickInside
