import { ReactNode } from 'react'

export type PaginationObserverProps = {
  onEndOfList: () => void
  offset?: number
  disabled?: boolean
  className?: string
  children?: ReactNode
}
