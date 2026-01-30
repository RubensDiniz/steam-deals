import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      card: {
        title: string
        background: string
        backgroundDark: string
        shadow: string
        border: string
      }
      discountBadge: {
        lightGreen: string
        darkGreen: string
        lightGray: string
        darkGray: string
      }
      rating: {
        green: string
        yellow: string
        red: string
      }
    }
    fonts: {
      display: string
      sans: string
    }
  }
}
