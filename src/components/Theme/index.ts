export const WIDE_SCREEN_MIN_SIZE = 1440
export const LARGE_SCREEN_MIN_SIZE = 1024
export const MEDIUM_SCREEN_MIN_SIZE = 768
export const SMALL_SCREEN_MAX_SIZE = 767

export const WideScreen = `@media screen and (min-width: ${WIDE_SCREEN_MIN_SIZE}px)`
export const LargeScreen = `@media screen and (min-width: ${LARGE_SCREEN_MIN_SIZE}px) and (max-width: ${WIDE_SCREEN_MIN_SIZE - 1}px)`
export const MediumScreen = `@media screen and (min-width: ${MEDIUM_SCREEN_MIN_SIZE}px) and (max-width: ${LARGE_SCREEN_MIN_SIZE - 1}px)`
export const SmallScreen = `@media screen and (max-width: ${SMALL_SCREEN_MAX_SIZE}px)`

// TODO!
export const theme = {
  colors: {
    card: {
      title: '#ffffff',
      background: '#16202d',
      backgroundDark: '#121923',
      shadow: 'rgba(0, 0, 0, 0.2)',
      discountLight: '#BEEE11',
      discountDark: '#4c6b22',
      border: 'rgba(42, 71, 94, 0.4)',
      originalPrice: '#738895',
    },
  },
  fonts: {
    display: "'Inter', sans-serif",
    sans: "'Inter', sans-serif",
  },
}
