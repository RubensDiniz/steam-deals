import { ReactNode } from 'react'
import { Placement } from '@floating-ui/react'

export type TooltipProps = {
  content: ReactNode
  children: ReactNode
  offset?: number
  placement?: Placement
  className?: string
  forceVisible?: boolean
}
