import { Game } from '@/components/GameCard'

export type GameListProps = {
  games: Game[]
  initialLoading: boolean
  paginationLoading: boolean
  onEndOfList: () => void
}
