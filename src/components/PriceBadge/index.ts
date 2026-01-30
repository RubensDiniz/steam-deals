import styled from '@emotion/styled'

export const PriceBadge = styled.div`
  display: flex;

  user-select: none;
`

export const DiscountContainer = styled.span`
  height: 2.286rem;
  padding: 0 0.429rem;

  color: ${({ theme }) => theme.colors.discountBadge.lightGreen};
  font-size: 1.786rem;
  font-weight: 700;
  line-height: 2.286rem;

  background-color: ${({ theme }) => theme.colors.discountBadge.darkGreen};
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0 0.429rem 0 0.786rem;
  height: 2.286rem;
  max-width: 4.4rem;

  line-height: 1;

  background-color: ${({ theme }) => theme.colors.discountBadge.darkGray};

  > span[data-price='original'] {
    color: ${({ theme }) => theme.colors.discountBadge.lightGray};
    font-size: 0.786rem;
    line-height: 0.857rem;
    text-decoration: line-through;
  }

  > span[data-price='current'] {
    color: ${({ theme }) => theme.colors.discountBadge.lightGreen};
    font-size: 1rem;
    line-height: 1.143rem;
    font-weight: 400;
  }
`
