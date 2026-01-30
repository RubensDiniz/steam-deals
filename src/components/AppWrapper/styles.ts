import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { MediumPlusScreen } from '@/components/Theme'

// TODO! COLORS
export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  html {
    font-size: 14px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family:
      'Inter',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #1b2838;
  }
`

// TODO! Review padding based on header?
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 10.857rem;

  ${MediumPlusScreen} {
    padding-top: 13.714rem;
  }
`
