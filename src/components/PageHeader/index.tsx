import {
  RowContent,
  HeaderMainRow,
  HeaderFilterRow,
  LogoLeft,
  LogoRight,
  FiltersWrapper,
  MobileFiltersRow,
  FilterToggleButton,
} from './styles'
import { ListSearch } from '@/components/ListSearch'
import { useListContext } from '@/components/ListContext'
import { ListSortBy, SortOption } from '@/components/ListSortBy'
import { ListPriceRange } from '@/components/ListPriceRange'
import { PriceBadge } from '@/components/PriceBadge'
import { useState } from 'react'

export const PageHeader = () => {
  const { onSearch, filters, onUpdateFilters } = useListContext()

  const [filtersOpen, setFiltersOpen] = useState(false)

  const sortOptions: SortOption[] = [
    { label: 'Deal Rating', value: 'DealRating' },
    { label: 'Reviews', value: 'Reviews' },
    { label: 'Savings', value: 'Savings' },
    { label: 'Price', value: 'Price' },
    { label: 'Title', value: 'Title' },
  ]

  const sortByValue = filters.get('sortBy') as SortOption['value'] | null

  const selectedLabel =
    sortOptions.find((option) => option.value === sortByValue)?.label ?? 'Deal Rating'

  return (
    <>
      <HeaderFilterRow data-is-open={filtersOpen}>
        <FiltersWrapper>
          <ListSortBy
            options={sortOptions}
            selectedLabel={selectedLabel}
            onUpdateSort={onUpdateFilters}
            isDescending={filters.get('desc') !== undefined}
          />
          <ListPriceRange onUpdateRange={onUpdateFilters} />
        </FiltersWrapper>
      </HeaderFilterRow>
      <HeaderMainRow>
        <RowContent>
          <PriceBadge>
            <LogoLeft>Quick</LogoLeft>
            <LogoRight>
              <span data-price="original">Steam</span>
              <span data-price="current">Deals</span>
            </LogoRight>
          </PriceBadge>
          <ListSearch onSearch={onSearch} />
          {/*<span>TODO!</span> ---------------------------------------*/}
        </RowContent>
      </HeaderMainRow>
      <MobileFiltersRow onClick={() => setFiltersOpen((prev) => !prev)}>
        <RowContent>
          <FilterToggleButton>
            <span className="material-symbols-outlined icon">tune</span>
            <span className="text">Filters & Sort</span>
          </FilterToggleButton>
          <span className="material-symbols-outlined">
            {filtersOpen ? 'expand_less' : 'expand_more'}
          </span>
        </RowContent>
      </MobileFiltersRow>
    </>
  )
}
