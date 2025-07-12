import { ListWrapper } from './styles'
import { GameListProps } from './types'
import { GameCard } from '@/components/GameCard'

// TODO! No games found design
export const GameList = ({
  games,
  initialLoading,
  paginationLoading,
  onEndOfList,
}: GameListProps) => (
  <ListWrapper onEndOfList={onEndOfList} disabled={initialLoading || paginationLoading}>
    {initialLoading ? (
      <span>Loading...</span>
    ) : (
      games.map(
        (game) =>
          game && (
            <span key={game.steamAppID}>
              <GameCard game={game} />
            </span>
          )
      )
    )}
    {paginationLoading && <span>LOADING MORE...</span>}
  </ListWrapper>
)
