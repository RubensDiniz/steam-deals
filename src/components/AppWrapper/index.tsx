'use client'
import { AppWrapperProps } from './types'
import { ScreenSizeProvider } from '@/components/ScreenSizeProvider'
import { globalStyles, PageContainer } from './styles'
import { Global, ThemeProvider } from '@emotion/react'
import { theme } from '@/components/Theme'

export const AppWrapper = ({ children }: AppWrapperProps) => (
  <ScreenSizeProvider>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <PageContainer>{children}</PageContainer>
    </ThemeProvider>
  </ScreenSizeProvider>
)
