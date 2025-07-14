import { HeaderWrapper } from './styles'
import { ListSearch } from '@/components/ListSearch'
import { useListContext } from '@/components/ListContext'
import { ListSortBy, SortOption } from '@/components/ListSortBy'

export const PageHeader = () => {
  const { onSearch, setFilters } = useListContext()

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
      <ListSortBy options={sortOptions} setFilters={setFilters} />
    </HeaderWrapper>
  )
}
