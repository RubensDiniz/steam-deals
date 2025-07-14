import { Game, GameCardProps } from './types'
import { Card, GameImage } from './styles'

// TODO! Treat when image not found
export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <GameImage
        src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.steamAppID}/header.jpg`}
        alt={game.title}
        width={460}
        height={215}
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
      <span style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        {game.normalPrice} -> {game.salePrice} ({Number(game.savings).toFixed(0)}%) |{' '}
        {game.dealRating}/10
      </span>
    </Card>
  )
}

// TODO! SkeletonCard

export type { Game }
