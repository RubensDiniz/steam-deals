import styled from '@emotion/styled'
import { MediumPlusScreen, SmallPlusScreen } from '@/components/Theme'

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  ${MediumPlusScreen} {
    width: auto;
    align-items: center;
  }
`

export const SortLabel = styled.span`
  align-self: start;

  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #6b7280;
  letter-spacing: 0.05em;
  white-space: nowrap;
`

export const DropdownWrapper = styled.div`
  display: flex;
  width: 100%;

  ${SmallPlusScreen} {
    width: 20rem;
  }
`

interface DropdownReferenceProps {
  isOpen: boolean
}

export const DropdownReference = styled.button<DropdownReferenceProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 2.286rem;
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 1rem;
  position: relative;

  color: white;
  font-size: 1rem;
  font-weight: 500;

  border-radius: ${({ isOpen }) => (isOpen ? '0.286rem 0 0 0' : '0.286rem 0 0 0.286rem')};
  border: 1px solid #4b617c;
  border-bottom-color: ${({ isOpen }) => (isOpen ? '#2a475e' : '#4b617c')};
  outline: none;

  background: #2a475e;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  transition: background 0.3s ease;

  cursor: pointer;

  z-index: 10;

  &:hover {
    background: #3d5f7a;
  }

  span.icon {
    color: #66c0f4;
    font-size: 1.25rem;
  }
`

export const SelectArrow = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  pointer-events: none;

  span {
    font-size: 1.25rem;
  }
`

// TODO!
export const DropdownMenu = styled.div`
  background: #1b2838;
  border: 1px solid #4b617c;
  border-top: none;
  border-radius: 0 0 2px 2px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 40;
  padding-bottom: 0.25rem;
`

// TODO!
export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.75rem;

  border-left: 3px solid transparent;

  background: transparent;

  cursor: pointer;

  transition: background 0.3s ease;

  &:hover {
    background: rgba(42, 71, 94, 0.2);
  }

  span.text {
    color: #d1d5db;
    font-size: 0.875rem;
    font-weight: 400;
  }

  &[data-active='true'] {
    border-left: 3px solid #66c0f4;
    background: rgba(42, 71, 94, 0.4);

    span.text {
      color: white;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  &:hover span.text {
    color: white;
  }

  span.check-icon {
    color: #66c0f4;
    font-size: 0.875rem;
    font-weight: 700;
  }
`

export const SortDirectionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.5rem;
  max-height: 2.286rem;

  color: white;

  border-radius: 0 0.286rem 0.286rem 0;
  border: 1px solid #4b617c;
  border-left-width: 0;
  outline: none;

  background: #2a475e;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  transition: background 0.3s ease;

  &:hover {
    background: #3d5f7a;
  }

  span.icon {
    color: #66c0f4;
    font-size: 1.25rem;
    transition: color 0.3s ease;
  }

  &:hover span.icon {
    color: white;
  }
`
