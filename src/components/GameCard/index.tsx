'use client'
import { Game, GameCardProps, SkeletonGameCardProps } from './types'
import {
  Card,
  GameImage,
  SkeletonContent,
  SkeletonCard,
  GameInfo,
  GameInfoHeader,
  GameTitle,
  ButtonContainer,
  StatsFooter,
  GameRatingColumn,
  StatLabel,
  StatValue,
  PriceColumn,
  DiscountBadge,
  PriceContainer,
  OriginalPrice,
  CurrentPrice,
  DealRatingColumn,
} from './styles'
import { useState } from 'react'

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
          <ButtonContainer data-role="card-action">🛈</ButtonContainer>
        </GameInfoHeader>
        <StatsFooter>
          <GameRatingColumn data-rating={getRating(Number(game.steamRatingPercent))}>
            <StatLabel>Steam Rating</StatLabel>
            <StatValue>{game.steamRatingPercent}</StatValue>
          </GameRatingColumn>

          <DealRatingColumn data-rating={getRating(Number(game.dealRating) * 10)}>
            <StatLabel data-light>Deal Rating</StatLabel>
            <StatValue>{game.dealRating}</StatValue>
          </DealRatingColumn>

          <PriceColumn>
            <DiscountBadge>-{Math.round(Number(game.savings))}%</DiscountBadge>
            <PriceContainer>
              <OriginalPrice>${game.normalPrice}</OriginalPrice>
              <CurrentPrice>${game.salePrice}</CurrentPrice>
            </PriceContainer>
          </PriceColumn>
        </StatsFooter>
      </GameInfo>
    </Card>
  )
}

// TODO!
export const SkeletonGameCard = ({ index }: SkeletonGameCardProps) => (
  <SkeletonCard index={index}>
    <SkeletonContent />
  </SkeletonCard>
)

export type { Game }
