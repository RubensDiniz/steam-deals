import { ListWrapper } from './styles'
import { GameListProps } from './types'
import { GameCard, SkeletonGameCard } from '@/components/GameCard'
import { useScreenSize } from '@/components/ScreenSizeProvider'
import { useMemo } from 'react'

// TODO! "No games found" design
export const GameList = ({
  games,
  initialLoading,
  paginationDisabled,
  isLastPage,
  onEndOfList,
}: GameListProps) => {
  const { size } = useScreenSize()

  const initialSkeletons = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => (
        <SkeletonGameCard index={(i % 4) + i / 4} key={`initial-skeleton-${i}`} />
      )),
    []
  )

  const skeletonCount = useMemo(() => {
    if (size === 'small') return 2
    if (size === 'medium') return 3
    return 4
  }, [size])

  const bottomSkeletons = useMemo(
    () =>
      Array.from({ length: skeletonCount }, (_, i) => (
        <SkeletonGameCard index={i % 4} key={`loading-skeleton-${i}`} />
      )),
    [skeletonCount]
  )

  // TODO! Check if offset is correct on all resolutions
  return (
    <ListWrapper onEndOfList={onEndOfList} disabled={paginationDisabled} offset={276}>
      {initialLoading ? (
        initialSkeletons
      ) : (
        <>
          {games.map((game) => game && <GameCard key={game.steamAppID} game={game} />)}
          {!isLastPage && bottomSkeletons}
        </>
      )}
    </ListWrapper>
  )
}
