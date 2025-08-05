'use client'
import { Game, GameCardProps, SkeletonGameCardProps } from './types'
import { Card, GameImage, Content, SkeletonCard } from './styles'
import { useState } from 'react'

export const GameCard = ({ game }: GameCardProps) => {
  const [imageSrc, setImageSrc] = useState(
    `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.steamAppID}/header.jpg`
  )

  // TODO! Get a better generic src for onError

  return (
    <Card>
      <GameImage
        src={imageSrc}
        alt={game.title}
        width={460}
        height={215}
        onError={() =>
          setImageSrc('https://cdn2.steamgriddb.com/thumb/0e18441e60c88b9af7ebde5cdf65a23a.jpg')
        }
      />
      <span
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {game.title}
      </span>
      <span
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {game.normalPrice} {`->`} {game.salePrice} ({Number(game.savings).toFixed(0)}%) |{' '}
        {Number(game.dealRating)}/10
      </span>
    </Card>
  )
}

export const SkeletonGameCard = ({ index }: SkeletonGameCardProps) => (
  <SkeletonCard index={index}>
    <Content />
  </SkeletonCard>
)

export type { Game }
