import { ReactNode } from 'react'

export type ScreenSize = 'small' | 'medium' | 'wide'

export type ScreenSizeContextType = {
  size: ScreenSize
  isMobile: boolean
}

export type ScreenSizeProviderProps = {
  children: ReactNode
}
