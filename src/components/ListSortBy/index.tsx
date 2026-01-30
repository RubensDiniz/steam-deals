import { ListSortByProps, SortOption } from './types'
import { useState } from 'react'
import {
  autoUpdate,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
  size,
} from '@floating-ui/react'
import {
  DropdownItem,
  DropdownMenu,
  DropdownReference,
  DropdownWrapper,
  SelectArrow,
  SortContainer,
  SortDirectionButton,
  SortLabel,
} from './styles'

export const ListSortBy = ({
  options,
  selectedLabel,
  onUpdateSort,
  isDescending,
}: ListSortByProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelectChange = (value: string | null) => {
    setIsOpen(false)

    onUpdateSort((prevState) => {
      const map = new Map(prevState)

      if (value === null) map.delete('sortBy')
      else map.set('sortBy', value)

      return map
    })
  }

  const handleOrderChange = () => {
    onUpdateSort((prevState) => {
      const map = new Map(prevState)

      if (map.get('desc') === undefined) map.set('desc', '1')
      else map.delete('desc')

      return map
    })
  }

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      shift(),
      size({
        apply({ rects, elements }) {
          elements.floating.style.width = `${rects.reference.width}px`
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
    placement: 'bottom-start',
  })

  const click = useClick(context)
  const focus = useFocus(context)
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([click, focus, dismiss])

  return (
    <SortContainer>
      <SortLabel>Sort by</SortLabel>

      <DropdownWrapper>
        <DropdownReference ref={refs.setReference} isOpen={isOpen} {...getReferenceProps()}>
          <span>{selectedLabel}</span>
          <SelectArrow>
            <span className="material-symbols-outlined">
              {isOpen ? 'expand_less' : 'expand_more'}
            </span>
          </SelectArrow>
        </DropdownReference>
        {isOpen && (
          <DropdownMenu ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            {options.map((option) => (
              <DropdownItem
                key={option.value}
                onClick={() => handleSelectChange(option.value)}
                data-active={option.label === selectedLabel}
              >
                {option.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
        <SortDirectionButton onClick={handleOrderChange}>
          <span className="material-symbols-outlined">
            {isDescending ? 'keyboard_double_arrow_up' : 'keyboard_double_arrow_down'}
          </span>
        </SortDirectionButton>
      </DropdownWrapper>
    </SortContainer>
  )
}

export type { ListSortByProps, SortOption }
