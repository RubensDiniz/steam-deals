import { Game } from '@/components/GameCard'

export type GameListProps = {
  games: Game[]
  initialLoading: boolean
  paginationDisabled: boolean
  isLastPage: boolean
  onEndOfList: () => void
}
