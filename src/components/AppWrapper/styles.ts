import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

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
  }
`

// TODO! Review padding based on header?
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 7.143rem 1rem 0;

  background-color: #1b2838;
`
