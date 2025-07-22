'use client'
import styles from './page.module.css'
import useSWR from 'swr'
import { get } from '@/hooks'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Game } from '@/components/GameCard'
import { GameList } from '@/components/GameList'
import { buildQuery } from '@/utils'
import { ListContext, FilterType } from '@/components/ListContext'
import { PageHeader } from '@/components/PageHeader'

export default function Home() {
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLastPage, setIsLastPage] = useState(false)
  const [isLoadingPage, setIsLoadingPage] = useState(true)
  const [loadedGames, setLoadedGames] = useState<Game[]>([])
  const [filters, setFilters] = useState<Map<string, FilterType>>(new Map())

  const onSearch = useCallback((query: string) => {
    setCurrentPage(1)
    setLoadedGames([])
    setIsLastPage(false)
    setIsLoadingPage(true)
    setSearchValue(query)
  }, [])

  const onUpdateFilters = useCallback(
    (updater: (prev: Map<string, FilterType>) => Map<string, FilterType>) => {
      setFilters((prev) => {
        const updated = updater(prev)
        setCurrentPage(1)
        setLoadedGames([])
        setIsLastPage(false)
        setIsLoadingPage(true)
        return updated
      })
    },
    []
  )

  const requestURL = useMemo(() => {
    const query = buildQuery(currentPage, searchValue, filters)
    return `/deals?${query}`
  }, [currentPage, searchValue, filters])

  const { data } = useSWR(requestURL, get())

  useEffect(() => {
    if (data?.data) {
      const newGames = data.data ?? []

      setIsLoadingPage(false)

      if (newGames.length === 0) {
        setIsLastPage(true)
        return
      }

      setLoadedGames((prev) => (currentPage === 1 ? newGames : [...prev, ...newGames]))
    }
  }, [data, currentPage])

  return (
    <div className={styles.page}>
      <GameList
        games={loadedGames}
        // TODO! If no results found on query, initialLoading should be false
        initialLoading={isLoadingPage && currentPage === 1}
        // TODO! Test for double loads
        // TODO! Treat duplicated items (one-offs)
        paginationLoading={isLoadingPage && currentPage > 1}
        paginationDisabled={isLoadingPage || isLastPage}
        // paginationDisabled // TODO!
        onEndOfList={() => {
          console.log('AAAA')
          setIsLoadingPage(true)
          setCurrentPage((prev) => prev + 1)
        }}
      />
      <ListContext.Provider value={{ onSearch, filters, onUpdateFilters }}>
        <PageHeader />
      </ListContext.Provider>
    </div>
  )
}
