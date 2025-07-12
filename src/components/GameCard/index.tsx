import { Game, GameCardProps } from './types'
import { Card, GameImage } from './styles'

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <GameImage
        src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.steamAppID}/header.jpg`}
        alt={game.title}
        width={460}
        height={215}
      />
      <span>
        {game.title} / {game.salePrice}
      </span>
    </Card>
  )
}

// TODO! SkeletonCard

export type { Game }
