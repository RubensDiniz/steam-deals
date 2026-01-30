import { FilterType } from '@/components/ListContext'

export type ListPriceRangeProps = {
  onUpdateRange: (updater: (prev: Map<string, FilterType>) => Map<string, FilterType>) => void
}
