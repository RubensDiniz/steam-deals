import { useEffect, useRef } from 'react'
import { PaginationObserverProps } from './types'
import { RelativeParent, Observer } from './styles'

export const PaginationObserver = ({
  onEndOfList,
  offset = 30,
  disabled = false,
  className,
  children,
}: PaginationObserverProps) => {
  const elementRef = useRef<HTMLUListElement>(null)
  const observerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!elementRef.current || !observerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!disabled && entry.isIntersecting) onEndOfList()
      },
      {
        root: null,
        threshold: 0.01,
      }
    )

    observer.observe(observerRef.current)

    return () => observer.disconnect()
  }, [onEndOfList, disabled, offset])

  return (
    <RelativeParent>
      <ul ref={elementRef} className={className}>
        {children}
      </ul>
      <Observer ref={observerRef} offset={offset} />
    </RelativeParent>
  )
}
