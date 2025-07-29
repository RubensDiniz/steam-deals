import { ListSortByProps, SortOption } from './types'

// TODO! Use a proper Select component
export const ListSortBy = ({ options, onUpdateSort, isDescending }: ListSortByProps) => {
  const handleSelectChange = (value: string | null) => {
    onUpdateSort((prevState) => {
      const map = new Map(prevState)

      if (value === null) map.delete('sortBy')
      else map.set('sortBy', value)

      return map
    })
  }

  const handleOrderChange = () => {
    onUpdateSort((prevState) => {
      const map = new Map(prevState)

      if (map.get('desc') === undefined) map.set('desc', '1')
      else map.delete('desc')

      return map
    })
  }

  return (
    <div style={{ width: '140px' }}>
      <select onChange={(e) => handleSelectChange(e.target.value)}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button onClick={handleOrderChange} style={{ padding: '0 0.5rem', lineHeight: '1.3' }}>
        {isDescending ? '⮟' : '⮝'}
      </button>
    </div>
  )
}

export type { ListSortByProps, SortOption }
