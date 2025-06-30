'use client'
import { AppWrapperProps } from './types'
import useSWRImmutable from 'swr/immutable'
import { get } from '@/hooks'

export const AppWrapper = ({ children }: AppWrapperProps) => {
  // TODO! For query, useSearchParams hook (useTable on universe)
  const { data } = useSWRImmutable('/deals?storeID=1&upperPrice=15', get())

  console.log(data)

  return children
}