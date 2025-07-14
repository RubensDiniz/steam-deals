import { ListSortByType, SortOption } from './types'

// TODO! Use a proper Select component
export const ListSortBy = ({ options, setFilters }: ListSortByType) => {
  const handleChange = (value: string) => {
    setFilters((prevState) => {
      const map = new Map(prevState)

      if (map.get('sortBy') === null) map.delete('sortBy')
      else map.set('sortBy', value)

      console.log(map.get('sortBy'))

      return map
    })
  }

  return (
    <select onChange={(e) => handleChange(e.target.value)}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export type { ListSortByType, SortOption }
