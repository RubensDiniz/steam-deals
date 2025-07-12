'use client'
import styles from './page.module.css'
import useSWRImmutable from 'swr/immutable'
import { get } from '@/hooks'
import { useEffect, useMemo, useState } from 'react'
import { Game } from '@/components/GameCard'
import { GameList } from '@/components/GameList'
import { buildQuery } from '@/utils'
import { ListContext, FilterType } from '@/components/ListContext'

export default function Home() {
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoadingPage, setIsLoadingPage] = useState(true)
  const [loadedGames, setLoadedGames] = useState<Game[]>([])
  const [filters, setFilters] = useState<Map<string, FilterType>>(new Map())

  // const debouncedSearch = useMemo(() => {
  //   return debounce((query: string) => onSearch(query), 500)
  // }, [onSearch])

  const onSearch = (query: string) => {
    if (query.length) {
      setCurrentPage(0)
      setLoadedGames([])
      setSearchValue(query)
      setFilters(new Map())
    }
  }

  const requestURL = useMemo(() => {
    const query = buildQuery(currentPage, searchValue, filters)
    setIsLoadingPage(true)
    return `/deals?${query}`
  }, [currentPage, searchValue, filters])

  const { data } = useSWRImmutable(requestURL, get())

  useEffect(() => {
    if (data?.data) {
      setIsLoadingPage(false)
      setLoadedGames((prev) => [...prev, ...data.data])
    }
  }, [data])

  return (
    <div className={styles.page}>
      <ListContext.Provider value={{ onSearch, filters, setFilters }}>
        {/*<div>TODO! Header</div>*/}
      </ListContext.Provider>
      <GameList
        games={loadedGames}
        // TODO! If no results found on query, initialLoading should be false
        initialLoading={isLoadingPage && currentPage === 0}
        // TODO! Test for double loads
        // TODO! Treat duplicated items (one-offs)
        paginationLoading={isLoadingPage && currentPage > 1}
        onEndOfList={() => setCurrentPage((prev) => prev + 1)}
      />
    </div>
  )
}
