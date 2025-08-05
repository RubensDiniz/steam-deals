'use client'
import { AppWrapperProps } from './types'
import { ScreenSizeProvider } from '@/components/ScreenSizeProvider'

export const AppWrapper = ({ children }: AppWrapperProps) => (
  <ScreenSizeProvider>{children}</ScreenSizeProvider>
)
