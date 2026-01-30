import styled from '@emotion/styled'
import Image from 'next/image'
import { SkeletonGameCardProps } from './types'
import { css } from '@emotion/react'
import { makeSkeletonBackgroundAnimation } from '@/utils'
import Link from 'next/link'
import { theme } from '@/components/Theme'

// TODO! Hover styles!
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

  /* TODO! */
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

export const GameRatingColumn = styled(StatColumn)`
  color: ${({ theme }) => theme.colors.card.backgroundDark};

  &[data-rating='high'] {
    background-color: ${({ theme }) => theme.colors.rating.green};
  }

  &[data-rating='medium'] {
    background-color: ${({ theme }) => theme.colors.rating.yellow};
  }

  &[data-rating='low'] {
    background-color: ${({ theme }) => theme.colors.rating.red};
    color: ${({ theme }) => theme.colors.card.title};
  }
`

export const DealRatingColumn = styled(StatColumn)`
  &[data-rating='high'] {
    color: ${({ theme }) => theme.colors.rating.green};
  }

  &[data-rating='medium'] {
    color: ${({ theme }) => theme.colors.rating.yellow};
  }

  &[data-rating='low'] {
    color: ${({ theme }) => theme.colors.rating.red};
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

// TODO! Replace colors...
export const SkeletonCard = styled.div<SkeletonGameCardProps>`
  ${BaseCardStyles};

  & [data-skeleton='true'] {
    animation: ${({ index }) =>
      index !== undefined
        ? css`
            ${makeSkeletonBackgroundAnimation('#2a3f5a', '#3d5675')} 1.5s ease infinite
          `
        : 'none'};
    animation-delay: ${({ index }) => (index ? `${0.1 * index}s` : 0)};
  }
`

export const SkeletonImage = styled.div`
  height: 10.714rem;
  width: 22.857rem;

  aspect-ratio: 2.1395;
`

export const SkeletonHeader = styled.div`
  height: 5.071rem;
  padding: 0.857rem;
`

interface SkeletonTextProps {
  width: number
}

export const SkeletonText = styled.div<SkeletonTextProps>`
  height: 1.4rem;
  width: ${({ width }) => width}%;
  border-radius: 0.286rem;
`

export const SkeletonStatFooter = styled(StatsFooter)`
  height: 3.857rem;
`

export const SkeletonStatColumn = styled.div`
  height: 100%;
  width: 5.357rem;
  flex: 1;

  border-right: 1px solid ${({ theme }) => theme.colors.card.border};

  &:last-of-type {
    border-right: none;
  }
`

export const SkeletonPriceColumn = styled(PriceColumn)``

export const SkeletonPrice = styled.div`
  width: 90%;
  height: 2.286rem;
`
