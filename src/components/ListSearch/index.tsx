import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { debounce } from 'lodash'
import { ListSearchWrapper, ResetIcon, SearchIcon, SearchInput } from './styles'
import { ListSearchTypes } from './types'

export const ListSearch = ({ onSearch }: ListSearchTypes) => {
  const hasInitialized = useRef(false)
  const [value, setValue] = useState('')

  const debouncedSearch = useMemo(() => {
    return debounce((query: string) => {
      onSearch(query)
    }, 500)
  }, [onSearch])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    []
  )

  const handleReset = useCallback(() => setValue(''), [])

  useEffect(() => {
    if (hasInitialized.current) debouncedSearch(value)
    else hasInitialized.current = true
  }, [value, debouncedSearch])

  return (
    <ListSearchWrapper>
      <SearchIcon className="material-symbols-outlined">search</SearchIcon>
      <SearchInput value={value} onChange={handleChange} placeholder="Search for games..." />
      {value.length ? (
        <ResetIcon className="material-symbols-outlined" onClick={handleReset}>
          close
        </ResetIcon>
      ) : null}
    </ListSearchWrapper>
  )
}
