import { ListWrapper } from './styles'
import { GameListProps } from './types'
import { GameCard } from '@/components/GameCard'

// TODO! "No games found" design
export const GameList = ({
  games,
  initialLoading,
  paginationLoading,
  paginationDisabled,
  onEndOfList,
}: GameListProps) => (
  <ListWrapper onEndOfList={onEndOfList} disabled={paginationDisabled}>
    {initialLoading ? (
      <span>Loading...</span>
    ) : (
      games.map(
        (game) =>
          game && (
            <div key={game.steamAppID}>
              <GameCard game={game} />
            </div>
          )
      )
    )}
    {paginationLoading && <span>LOADING MORE...</span>}
    {/* TODO! Always show pagination, and change observer offset */}
  </ListWrapper>
)
