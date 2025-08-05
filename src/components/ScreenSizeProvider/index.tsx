import { createContext, useContext, useEffect, useState } from 'react'
import throttle from 'lodash/throttle'
import { SMALL_SCREEN_MAX_SIZE, WIDE_SCREEN_MIN_SIZE } from '../Theme'
import { ScreenSizeContextType, ScreenSizeProviderProps, ScreenSize } from './types'

const ScreenSizeContext = createContext<ScreenSizeContextType>({
  size: 'wide',
  isMobile: false,
})

export const useScreenSize = () => useContext(ScreenSizeContext)

export const ScreenSizeProvider = ({ children }: ScreenSizeProviderProps) => {
  const [size, setSize] = useState<ScreenSize>('wide')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const listener = throttle(() => {
      setSize(
        window.innerWidth < SMALL_SCREEN_MAX_SIZE
          ? 'small'
          : window.innerWidth < WIDE_SCREEN_MIN_SIZE
            ? 'medium'
            : 'wide'
      )

      setIsMobile(window.innerWidth < SMALL_SCREEN_MAX_SIZE)
    }, 250)

    listener()
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [])

  return (
    <ScreenSizeContext.Provider value={{ size, isMobile }}>{children}</ScreenSizeContext.Provider>
  )
}
