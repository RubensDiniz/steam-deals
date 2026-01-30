'use client'
import { Game, GameCardProps, SkeletonGameCardProps } from './types'
import {
  Card,
  GameImage,
  SkeletonCard,
  GameInfo,
  GameInfoHeader,
  GameTitle,
  StatsFooter,
  GameRatingColumn,
  StatLabel,
  StatValue,
  PriceColumn,
  DealRatingColumn,
  StatTooltip,
  SkeletonImage,
  SkeletonHeader,
  SkeletonText,
  SkeletonStatColumn,
  SkeletonStatFooter,
  SkeletonPriceColumn,
  SkeletonPrice,
} from './styles'
import { useMemo, useState } from 'react'
import { Tooltip } from '@/components/Tooltip'
import { DiscountContainer, PriceBadge, PriceContainer } from '@/components/PriceBadge'

export const GameCard = ({ game }: GameCardProps) => {
  const [imageSrc, setImageSrc] = useState(
    `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.steamAppID}/header.jpg`
  )

  const getRating = (rating: number): string =>
    rating >= 70 ? 'high' : rating >= 40 ? 'medium' : 'low'

  // TODO! Get a better generic src for onError

  return (
    <Card href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}>
      <GameImage
        src={imageSrc}
        alt={game.title}
        width={460}
        height={215}
        onError={() =>
          setImageSrc('https://cdn2.steamgriddb.com/thumb/0e18441e60c88b9af7ebde5cdf65a23a.jpg')
        }
      />
      <GameInfo>
        <GameInfoHeader>
          <GameTitle>{game.title}</GameTitle>
          {/* TODO! Button + modal */}
          {/*<ButtonContainer data-role="card-action">🛈</ButtonContainer>*/}
        </GameInfoHeader>
        <StatsFooter>
          <Tooltip
            content={
              <StatTooltip>
                <span>{game.steamRatingText}</span>
                <span>({game.steamRatingCount} reviews)</span>
              </StatTooltip>
            }
            placement={'bottom-start'}
          >
            <GameRatingColumn data-rating={getRating(Number(game.steamRatingPercent))}>
              <StatLabel>Steam Rating</StatLabel>
              <StatValue>{game.steamRatingPercent}</StatValue>
            </GameRatingColumn>
          </Tooltip>

          <DealRatingColumn data-rating={getRating(Number(game.dealRating) * 10)}>
            <StatLabel data-light>Deal Rating</StatLabel>
            <StatValue>{game.dealRating}</StatValue>
          </DealRatingColumn>

          <PriceColumn>
            <PriceBadge>
              <DiscountContainer>-{Math.round(Number(game.savings))}%</DiscountContainer>
              <PriceContainer>
                <span data-price="original">${game.normalPrice}</span>
                <span data-price="current">${game.salePrice}</span>
              </PriceContainer>
            </PriceBadge>
          </PriceColumn>
        </StatsFooter>
      </GameInfo>
    </Card>
  )
}

export const SkeletonGameCard = ({ index }: SkeletonGameCardProps) => {
  const textWidth = useMemo(() => {
    const min = 25
    const max = 80
    const minute = new Date().getMinutes()
    return min + (((minute + (index ?? 0)) * 37) % (max - min))
  }, [index])

  return (
    <SkeletonCard index={index}>
      <SkeletonImage data-skeleton={'true'} />
      <SkeletonHeader>
        <SkeletonText width={textWidth} data-skeleton={'true'} />
      </SkeletonHeader>
      <SkeletonStatFooter>
        <SkeletonStatColumn data-skeleton={'true'} />
        <SkeletonStatColumn data-skeleton={'true'} />
        <SkeletonPriceColumn>
          <SkeletonPrice data-skeleton={'true'} />
        </SkeletonPriceColumn>
      </SkeletonStatFooter>
    </SkeletonCard>
  )
}

export type { Game }
