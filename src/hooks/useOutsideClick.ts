import {
 LegacyRef, useCallback, useEffect, useRef 
} from 'react'

export const useOutsideClick = <T extends HTMLElement>(
  onOutsideClick: () => void
): LegacyRef<T> => {
  const ref = useRef<T>()

  const handleOutsideClick = useCallback(
    e => {
      if (!ref?.current?.contains(e.target)) {
        onOutsideClick()
      }
    },
    [onOutsideClick]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick, false)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick, false)
    }
  }, [handleOutsideClick])

  return ref
}
