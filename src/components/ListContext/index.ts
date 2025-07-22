import { createContext, useContext } from 'react'
import { ListContextProps, FilterType } from './types'

export const ListContext = createContext<ListContextProps>({
  onSearch: () => undefined,
  filters: new Map(),
  onUpdateFilters: () => undefined,
})

export const useListContext = () => useContext(ListContext)

export type { FilterType }
