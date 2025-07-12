// TODO! put this somewhere else?
export type Game = {
  internalName: string
  title: string
  metacriticLink: string
  dealID: string
  storeID: string
  gameID: string
  salePrice: string
  normalPrice: string
  isOnSale: string // "1" or "0"
  savings: string
  metacriticScore: string
  steamRatingText: string
  steamRatingPercent: string
  steamRatingCount: string
  steamAppID: string
  releaseDate: number
  lastChange: number
  dealRating: string
}

export type GameCardProps = {
  game: Game
}
