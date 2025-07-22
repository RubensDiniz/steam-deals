import { HeaderWrapper } from './styles'
import { ListSearch } from '@/components/ListSearch'
import { useListContext } from '@/components/ListContext'
import { ListSortBy, SortOption } from '@/components/ListSortBy'
import { ListPriceRange } from '@/components/ListPriceRange'

export const PageHeader = () => {
  const { onSearch, filters, onUpdateFilters } = useListContext()

  const sortOptions: SortOption[] = [
    { label: 'Deal Rating', value: 'DealRating' },
    {
      label: 'Title',
      value: 'Title',
    },
    { label: 'Savings', value: 'Savings' },
    { label: 'Price', value: 'Price' },
  ]

  return (
    <HeaderWrapper>
      <ListSearch onSearch={onSearch} />
      <ListSortBy
        options={sortOptions}
        onUpdateSort={onUpdateFilters}
        isDescending={filters.get('desc') !== undefined}
      />
      <ListPriceRange onUpdateRange={onUpdateFilters} />
    </HeaderWrapper>
  )
}
