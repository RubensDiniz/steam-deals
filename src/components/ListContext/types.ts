import { Dispatch, SetStateAction } from 'react'

export type FilterType = string | boolean | number

export type ListContextProps = {
  onSearch: (query: string) => void
  filters: Map<string, FilterType>
  setFilters: Dispatch<SetStateAction<Map<string, FilterType>>>
}
