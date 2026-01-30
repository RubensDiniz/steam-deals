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

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background: rgba(22, 32, 45, 0.3);
  border-radius: 0.5rem;
  border: 1px dashed #2a475e;

  width: 22.857rem;

  ${MediumScreen} {
    width: 46.714rem;
  }

  ${LargeScreen} {
    width: 70.571rem;
  }

  ${WideScreen} {
    width: 94.429rem;
  }
`

export const NoResultsIconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  background: rgba(42, 63, 90, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  span {
    font-size: 2.5rem;
    color: #9ca3af;
  }
`

export const NoResultsTitle = styled.h3`
  font-size: 1.25rem;
  color: white;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
`

export const NoResultsDescription = styled.p`
  color: #9ca3af;
  text-align: center;
  max-width: 32rem;
  margin: 0.5rem 0 1.5rem;
  line-height: 1.5;
`

export const ClearFiltersButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: transparent;
  color: #66c0f4;
  border: 1px solid #4b617c;
  border-radius: 2px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: #2a475e;
    color: white;
  }

  &:active {
    transform: scale(0.98);
  }
`
