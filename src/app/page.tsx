'use client'
import styles from './page.module.css'
import useSWRImmutable from 'swr/immutable'
import { get } from '@/hooks'
import { useEffect, useMemo, useState } from 'react'
import { Game } from '@/components/GameCard'
import { GameList } from '@/components/GameList'
import { buildQuery } from '@/utils'
import { debounce } from 'lodash'

export default function Home() {
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [loadingPage, setLoadingPage] = useState(true)
  const [loadedGames, setLoadedGames] = useState<Game[]>([])

  const debouncedSearch = debounce((query: string) => {
    if (query.length) {
      setCurrentPage(1)
      setLoadedGames([])
      setSearchValue(query)
    }
  }, 500)

  const requestURL = useMemo(() => {
    const query = buildQuery(currentPage, searchValue, new Map<string, never>())
    setLoadingPage(true)
    // TODO!
    return `/deals?${query}`
  }, [currentPage, searchValue])

  const { data } = useSWRImmutable(requestURL, get())

  useEffect(() => {
    if (data?.data) {
      setLoadingPage(false)
      setLoadedGames((prev) => [...prev, ...data.data])
    }
  }, [data])

  return (
    <div className={styles.page}>
      <GameList
        games={loadedGames}
        // TODO! If no results found on query, initialLoading should be false
        initialLoading={loadingPage && currentPage === 0}
        // TODO! Test for double loads
        paginationLoading={loadingPage && currentPage > 1}
        onEndOfList={() => setCurrentPage((prev) => prev + 1)}
      />
    </div>
  )
}
