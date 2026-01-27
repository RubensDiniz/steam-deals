import styled from '@emotion/styled'
import { LargeScreen, MediumPlusScreen, MediumScreen, WideScreen } from '@/components/Theme'
import { DiscountContainer, PriceContainer } from '@/components/PriceBadge'
import { RangeContainer } from '@/components/ListPriceRange/styles'

export const HeaderRow = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 1.5rem 0;

  top: 0;
  left: 0;
  right: 0;
`

export const HeaderMainRow = styled(HeaderRow)`
  background-color: #171a21;
  border-bottom: 1px solid #2a475e;
`

export const RowContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

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

export const LogoLeft = styled(DiscountContainer)`
  height: 2.857rem;
  padding: 0 0.536rem;

  font-size: 2.214rem;
  line-height: 2.857rem;
`

export const LogoRight = styled(PriceContainer)`
  height: 2.857rem;

  > span[data-price='original'] {
    font-size: 0.982rem;
    line-height: 1.07rem;
    text-decoration: unset;
  }

  > span[data-price='current'] {
    font-size: 1.25rem;
    line-height: 1.428rem;
  }
`

export const HeaderFilterRow = styled(HeaderRow)`
  top: -0.429rem;

  padding: 1rem 0;

  background: #13161c;
  border-bottom: 1px solid rgba(42, 71, 94, 0.5);

  transition: top 0.5s ease;

  &[data-is-open='true'] {
    top: 10.643rem;
  }

  ${MediumPlusScreen} {
    top: 5.929rem;
  }
`

export const FiltersWrapper = styled(RowContent)`
  flex-direction: column;

  ${MediumPlusScreen} {
    flex-direction: row;
  }
`

// TODO! Hover
export const MobileFiltersRow = styled(HeaderRow)`
  top: 5.929rem;

  cursor: pointer;
  user-select: none;
  color: #66c0f4;

  background: #13161c;

  ${MediumPlusScreen} {
    display: none;
  }
`

// TODO!
export const FilterToggleButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span.icon {
    font-size: 1.25rem;
  }

  span.text {
    font-size: 0.9rem;
    line-height: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`
