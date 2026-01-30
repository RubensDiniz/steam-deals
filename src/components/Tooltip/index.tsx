import { useRef, useState } from 'react'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useRole,
  useInteractions,
  FloatingArrow,
  arrow,
  FloatingPortal,
} from '@floating-ui/react'
import { TooltipProps } from './types'
import { TooltipTrigger, TooltipWrapper } from './styles'

export const Tooltip = ({
  content,
  children,
  offset: tooltipOffset = 10,
  placement = 'top',
  className,
  forceVisible,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const arrowRef = useRef(null)

  const { refs, floatingStyles, context } = useFloating({
    open: isVisible || forceVisible,
    onOpenChange: setIsVisible,
    middleware: [offset(tooltipOffset), arrow({ element: arrowRef }), shift(), flip()],
    whileElementsMounted: autoUpdate,
    placement,
  })

  const hover = useHover(context, { move: false })
  const focus = useFocus(context)
  const role = useRole(context, { role: 'tooltip' })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, role])

  return (
    <>
      <TooltipTrigger ref={refs.setReference} {...getReferenceProps()} className={className}>
        {children}
      </TooltipTrigger>
      {isVisible && (
        <FloatingPortal>
          <TooltipWrapper ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            {content}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              width={10}
              height={8}
              tipRadius={2}
              fill="hsla(215, 32%, 10%, 0.95)"
              className="floating-arrow"
            />
          </TooltipWrapper>
        </FloatingPortal>
      )}
    </>
  )
}
