import { FilterType } from '@/components/ListContext'

export type SortOption = { label: string; value: string }

export type ListSortByProps = {
  options: SortOption[]
  selectedLabel: string
  onUpdateSort: (updater: (prev: Map<string, FilterType>) => Map<string, FilterType>) => void
  isDescending: boolean
}
