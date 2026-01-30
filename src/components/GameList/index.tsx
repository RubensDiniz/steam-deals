import {
  ClearFiltersButton,
  ListWrapper,
  NoResultsContainer,
  NoResultsDescription,
  NoResultsIconWrapper,
  NoResultsTitle,
} from './styles'
import { GameListProps } from './types'
import { GameCard, SkeletonGameCard } from '@/components/GameCard'
import { useScreenSize } from '@/components/ScreenSizeProvider'
import { useMemo } from 'react'

export const GameList = ({
  games,
  initialLoading,
  paginationDisabled,
  isLastPage,
  onEndOfList,
  onClearFilters,
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

  const loadingOffset = useMemo(() => (size === 'small' ? 1040 : 740), [size])

  return !games.length && !initialLoading ? (
    <NoResultsContainer>
      <NoResultsIconWrapper>
        <span className="material-symbols-outlined">search_off</span>
      </NoResultsIconWrapper>

      <NoResultsTitle>No games found</NoResultsTitle>

      <NoResultsDescription>
        {`We couldn't find any games matching your search criteria. Try adjusting your filters or search terms.`}
      </NoResultsDescription>

      <ClearFiltersButton onClick={onClearFilters}>Clear all filters</ClearFiltersButton>
    </NoResultsContainer>
  ) : (
    <ListWrapper onEndOfList={onEndOfList} disabled={paginationDisabled} offset={loadingOffset}>
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
