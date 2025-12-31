import styled from '@emotion/styled'
import Image from 'next/image'
import { SkeletonGameCardProps } from './types'
import { css } from '@emotion/react'
import { makeSkeletonBackgroundAnimation } from '@/utils'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 22.857rem;

  border-radius: 0.143rem;

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.card.background};

  box-shadow: 0 0.286rem 0.429rem ${({ theme }) => theme.colors.card.shadow};
`

export const GameImage = styled(Image)`
  max-width: 100%;
  height: 100%;

  overflow: hidden;

  aspect-ratio: 2.1395;
`

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.card.background}, ${theme.colors.card.backgroundDark})`};
`

export const GameInfoHeader = styled.div`
  display: flex;
  gap: 0.571rem;
  padding: 0.857rem;
`

export const GameTitle = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  flex: 1;
  min-width: 0;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.card.title};

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;

  /* Fixed height for exactly 2 lines: 0.875rem * 1.4 * 2 = 2.45rem */
  height: 2.8rem;
  max-height: 2.8rem; // Redundant but ensures no overflow
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  background-color: red;
`

export const StatsFooter = styled.div`
  display: grid;
  grid-template-columns: 75px 75px 2fr;
  border-top: 1px solid ${({ theme }) => theme.colors.card.border};
  background-color: ${({ theme }) => theme.colors.card.shadow};
`

export const StatColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 0 0.857rem;
  align-items: center;
  justify-content: center;

  border-right: 1px solid ${({ theme }) => theme.colors.card.border};

  &:last-of-type {
    border-right: none;
  }
`

export const GameRatingColumn = styled(StatColumn)`
  color: rgba(27, 40, 56, 0.75);

  &[data-rating='high'] {
    background-color: #66cc33;
  }

  &[data-rating='medium'] {
    background-color: #ffcc33;
  }

  &[data-rating='low'] {
    background-color: #ff3333;
  }
`

export const StatLabel = styled.span`
  text-align: center;
  font-size: 9px;

  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2px;
`

export const StatValue = styled.span`
  font-size: 20px;
  font-weight: 900;
`

export const DealRatingColumn = styled(StatColumn)`
  color: #738895;
`

export const PriceColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  justify-content: flex-end;
  padding: 0.857rem;
  border-left: 1px solid ${({ theme }) => theme.colors.card.border};
`

export const DiscountBadge = styled.span`
  height: 2.286rem;
  padding: 0 0.429rem;

  color: ${({ theme }) => theme.colors.card.discountText};
  font-size: 1.786rem;
  font-weight: 700;
  line-height: 2.286rem;

  background-color: ${({ theme }) => theme.colors.card.discountBackground};
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 4.4rem;
  justify-content: center;
  padding: 0 0.429rem 0 0.786rem;
  height: 2.286rem;

  align-items: flex-end;
  line-height: 1;

  background-color: #344654;
`

export const OriginalPrice = styled.span`
  margin-bottom: 0.143rem;

  color: ${({ theme }) => theme.colors.card.originalPrice};
  font-size: 0.786rem;
  //line-height: 0.857rem;
  text-decoration: line-through;
`

export const CurrentPrice = styled.span`
  color: ${({ theme }) => theme.colors.card.discountText};
  font-weight: 400;
  font-size: 1rem;
  //line-height: 1.143rem;
`

// TODO! Calculate bottom padding properly?
// TODO! Replace colors...
export const SkeletonCard = styled(Card)<SkeletonGameCardProps>`
  animation: ${({ index }) =>
    index !== undefined
      ? css`
          ${makeSkeletonBackgroundAnimation('#383838', '#767676')} 3s ease infinite
        `
      : 'none'};
  animation-delay: ${({ index }) => (index ? `${0.1 * index}s` : 0)};

  padding-bottom: 2rem;
`

export const SkeletonContent = styled.div`
  //max-width: 100%;
  //height: 100%;

  aspect-ratio: 2.1395;
`
