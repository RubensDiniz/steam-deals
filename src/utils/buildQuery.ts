import { FilterType } from '@/components/ListContext'

export const buildQuery = (page: number, query: string, filters: Map<string, FilterType>) => {
  const params = new URLSearchParams()

  // Constant basic query
  params.set('onSale', '1')
  params.set('storeID', '1')
  params.set('pageSize', '24')
  // params.set('upperPrice', '15') TODO!

  // Query (game title)
  if (query.length) params.set('title', query)

  // Page
  if (page !== 1) params.set('pageNumber', String(page))

  // Filters
  for (const [key, value] of Array.from(filters)) {
    if (value) params.set(key, value.toString())
  }

  // Sort params to avoid duplicate requests due to different key orders
  params.sort()

  return params.toString()
}
