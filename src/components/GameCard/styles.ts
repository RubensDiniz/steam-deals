import styled from '@emotion/styled'
import Image from 'next/image'
import { SkeletonGameCardProps } from './types'
import { css } from '@emotion/react'
import { makeSkeletonBackgroundAnimation } from '@/utils'
import Link from 'next/link'
import { theme } from '@/components/Theme'

const BaseCardStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 22.857rem;

  border-radius: 0.143rem;

  overflow: hidden;

  background-color: ${theme.colors.card.background};

  box-shadow: 0 0.286rem 0.429rem ${theme.colors.card.shadow};
`

export const Card = styled(Link)`
  ${BaseCardStyles}
  &:hover [data-role="card-action"] {
    opacity: 1;
  }
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
  position: relative;
  display: flex;
  gap: 0.571rem;
  padding: 0.857rem;
  height: calc(3.36rem + (0.857rem * 2));
`

export const GameTitle = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  width: 100%;

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.card.title};

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  width: 2.143rem;
  height: 2.143rem;
  align-items: center;
  justify-content: center;

  border-radius: 0.429rem 0 0 0;

  opacity: 0;
  transition: opacity 0.2s ease;

  background-color: #344654;
`

export const StatsFooter = styled.div`
  display: grid;
  grid-template-columns: 75px 75px 2fr;
  border-top: 1px solid ${({ theme }) => theme.colors.card.border};
  background-color: ${({ theme }) => theme.colors.card.shadow};
`

export const StatColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 0.857rem;
  flex: 1;

  border-right: 1px solid ${({ theme }) => theme.colors.card.border};

  &:last-of-type {
    border-right: none;
  }
`

export const StatLabel = styled.span`
  margin-bottom: 0.143rem;

  text-align: center;
  font-size: 0.643rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

export const StatValue = styled.span`
  font-size: 1.429rem;
  font-weight: 900;
`

export const StatTooltip = styled.div`
  display: flex;
  flex-direction: column;
`

// TODO! Colors
export const GameRatingColumn = styled(StatColumn)`
  color: ${({ theme }) => theme.colors.card.backgroundDark};

  &[data-rating='high'] {
    background-color: #66cc33;
  }

  &[data-rating='medium'] {
    background-color: #ffcc33;
  }

  &[data-rating='low'] {
    background-color: #ff3333;
    color: ${({ theme }) => theme.colors.card.title};
  }
`

/* TODO! Delete this
&[data-rating='very-high'] {
    background-color: #66cc33;
  }

  &[data-rating='high'] {
    background-color: #66cc33;
  }

  &[data-rating='medium'] {
    background-color: #ffcc33;
  }

  &[data-rating='low'] {
    background-color: #ff3333;
    color: ${({ theme }) => theme.colors.card.title};
  }

  &[data-rating='very-low'] {
    background-color: #ff3333;
    color: ${({ theme }) => theme.colors.card.title};
  }
 */

// TODO! COLORS
export const DealRatingColumn = styled(StatColumn)`
  color: ${({ theme }) => theme.colors.card.originalPrice};

  &[data-rating='high'] {
    color: #66cc33;
  }

  &[data-rating='medium'] {
    color: #ffcc33;
  }

  &[data-rating='low'] {
    color: #ff3333;
  }
`

export const PriceColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.857rem;
  flex: 1;

  border-left: 1px solid ${({ theme }) => theme.colors.card.border};
`

export const DiscountBadge = styled.span`
  height: 2.286rem;
  padding: 0 0.429rem;

  color: ${({ theme }) => theme.colors.card.discountLight};
  font-size: 1.786rem;
  font-weight: 700;
  line-height: 2.286rem;

  background-color: ${({ theme }) => theme.colors.card.discountDark};
`

// TODO! COLOR
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0 0.429rem 0 0.786rem;
  height: 2.286rem;
  max-width: 4.4rem;

  line-height: 1;

  background-color: #344654;
`

export const OriginalPrice = styled.span`
  color: ${({ theme }) => theme.colors.card.originalPrice};
  font-size: 0.786rem;
  line-height: 0.857rem;
  text-decoration: line-through;
`

export const CurrentPrice = styled.span`
  color: ${({ theme }) => theme.colors.card.discountLight};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.143rem;
`

// TODO! Calculate bottom padding properly?
// TODO! Replace colors...
export const SkeletonCard = styled.div<SkeletonGameCardProps>`
  ${BaseCardStyles};

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
