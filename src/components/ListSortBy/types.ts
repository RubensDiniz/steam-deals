import { Dispatch, SetStateAction } from 'react'
import { FilterType } from '@/components/ListContext'

export type SortOption = { label: string; value: string }

export type ListSortByType = {
  options: SortOption[]
  setFilters: Dispatch<SetStateAction<Map<string, FilterType>>>
}
