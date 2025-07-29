export type FilterType = string | boolean | number

export type ListContextProps = {
  onSearch: (query: string) => void
  filters: Map<string, FilterType>
  onUpdateFilters: (updater: (prev: Map<string, FilterType>) => Map<string, FilterType>) => void
}
