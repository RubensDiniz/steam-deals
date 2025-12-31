import styled from '@emotion/styled'
import { PaginationObserver } from '@/components/PaginationObserver'
import { LargeScreen, MediumScreen, WideScreen } from '@/components/Theme'

export const ListWrapper = styled(PaginationObserver)`
  list-style: none;
  margin: 0;
  padding: 0;

  position: relative;
  display: grid;
  grid-gap: 1rem;

  width: 100%;
  max-width: fit-content;

  grid-template-columns: 1fr;

  ${MediumScreen} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${LargeScreen} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${WideScreen} {
    grid-template-columns: repeat(4, 1fr);
  }
`
