import styled from '@emotion/styled'
import { PaginationObserver } from '@/components/PaginationObserver'
import { LargeScreen, SmallScreen, WideScreen } from '@/components/Theme'

export const ListWrapper = styled(PaginationObserver)`
  list-style: none;
  margin: 0;
  padding: 0;

  position: relative;
  display: grid;
  grid-gap: 1rem;

  /* TODO! grid-auto-rows height? */

  ${SmallScreen} {
    grid-template: auto / repeat(2, 1fr);
  }

  ${LargeScreen} {
    grid-template: auto / repeat(3, 1fr);
  }

  ${WideScreen} {
    grid-template: auto / repeat(4, 4fr);
  }
`
