import { forwardRef, useRef, useEffect } from 'react'
import { PaginationObserverProps } from './types'
import { Observer, RelativeParent } from './styles'

export const PaginationObserver = forwardRef<HTMLUListElement, PaginationObserverProps>(
  function PaginationObserver(
    { onEndOfList, offset = 30, disabled = false, className, children },
    forwardedRef
  ) {
    const elementRef = useRef<HTMLUListElement>(null)
    const observerRef = useRef<HTMLDivElement | null>(null)

    const setElementRef = (node: HTMLUListElement | null) => {
      elementRef.current = node
      if (typeof forwardedRef === 'function') {
        forwardedRef(node)
      } else if (forwardedRef) {
        forwardedRef.current = node
      }
    }

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
    }, [onEndOfList, disabled])

    return (
      <RelativeParent>
        <ul ref={setElementRef} className={className}>
          {children}
        </ul>
        <Observer ref={observerRef} offset={offset} />
      </RelativeParent>
    )
  }
)
