import { ListWrapper } from './styles'
import { GameListProps } from './types'
import { GameCard, SkeletonGameCard } from '@/components/GameCard'
import { useScreenSize } from '@/components/ScreenSizeProvider'

// TODO! "No games found" design
export const GameList = ({
  games,
  initialLoading,
  paginationDisabled,
  isLastPage,
  onEndOfList,
}: GameListProps) => {
  const { size } = useScreenSize()

  // TODO! Check if offset is correct on all resolutions
  return (
    <ListWrapper onEndOfList={onEndOfList} disabled={paginationDisabled} offset={276}>
      {initialLoading ? (
        Array.from({ length: 20 }, (_, i) => <SkeletonGameCard index={(i % 4) + i / 4} key={i} />)
      ) : (
        <>
          {games.map(
            (game) =>
              game && (
                <div key={game.steamAppID}>
                  <GameCard game={game} />
                </div>
              )
          )}
          {!isLastPage &&
            Array.from({ length: size === 'small' ? 2 : size === 'medium' ? 3 : 4 }, (_, i) => (
              <SkeletonGameCard index={i % 4} key={i} />
            ))}
        </>
      )}
    </ListWrapper>
  )
}
