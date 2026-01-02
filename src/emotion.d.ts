import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      card: {
        title: string
        background: string
        backgroundDark: string
        shadow: string
        discountLight: string
        discountDark: string
        border: string
        originalPrice: string
      }
    }
    fonts: {
      display: string
      sans: string
    }
  }
}
