export const WIDE_SCREEN_MIN_SIZE = 1440
export const LARGE_SCREEN_MIN_SIZE = 1024
export const MEDIUM_SCREEN_MIN_SIZE = 768
export const SMALL_SCREEN_MAX_SIZE = 767

export const WideScreen = `@media screen and (min-width: ${WIDE_SCREEN_MIN_SIZE}px)`
export const LargePlusScreen = `@media (min-width: ${LARGE_SCREEN_MIN_SIZE}px)`
export const LargeScreen = `@media screen and (min-width: ${LARGE_SCREEN_MIN_SIZE}px) and (max-width: ${WIDE_SCREEN_MIN_SIZE - 1}px)`
export const MediumPlusScreen = `@media (min-width: ${MEDIUM_SCREEN_MIN_SIZE}px)`
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
      border: 'rgba(42, 71, 94, 0.4)',
    },
    discountBadge: {
      lightGreen: '#BEEE11',
      darkGreen: '#4c6b22',
      lightGray: '#738895',
      darkGray: '#344654',
    },
    rating: {
      green: '#66cc33',
      yellow: '#ffcc33',
      red: '#ff3333',
    },
  },
  fonts: {
    display: "'Inter', sans-serif",
    sans: "'Inter', sans-serif",
  },
}
