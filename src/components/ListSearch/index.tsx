import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { debounce } from 'lodash'
import { ListSearchWrapper } from './styles'
import { ListSearchTypes } from './types'

// TODO! Placeholder prop?
export const ListSearch = ({ onSearch }: ListSearchTypes) => {
  const hasInitialized = useRef(false)
  const [value, setValue] = useState('')

  const debouncedSearch = useMemo(() => {
    return debounce((query: string) => {
      console.log('a')
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
      <input value={value} onChange={handleChange} />
      {/*{value.length ? <Reset onClick={handleReset} /> : null} TODO! */}
    </ListSearchWrapper>
  )
}
