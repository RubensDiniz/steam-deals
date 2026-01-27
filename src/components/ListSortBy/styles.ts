import styled from '@emotion/styled'

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  // TODO!
  @media (min-width: 1024px) {
    width: auto;
    align-items: center;
  }
`

// TODO! Colors
export const SortLabel = styled.span`
  align-self: start;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #6b7280;
  letter-spacing: 0.05em;
  white-space: nowrap;

  // TODO!
  @media (min-width: 1024px) {
    padding-top: 0;
  }
`

export const DropdownWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;

  // TODO!
  @media (min-width: 1024px) {
    width: 20rem;
  }
`

// TODO!
export const DropdownReference = styled.button`
  width: 100%;
  background: #2a475e;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem 0.5rem 1rem;
  border-radius: 2px 2px 0 0;
  border: 1px solid #4b617c;
  border-bottom-color: #2a475e;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  max-height: 2.286rem;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: 50;

  &:hover {
    background: #3d5f7a;
  }

  span.icon {
    color: #66c0f4;
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

// TODO!
export const SortDirectionButton = styled.button`
  background: #2a475e;
  color: white;
  width: 2.5rem;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid #4b617c;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  max-height: 2.286rem;
  transition: background 0.3s ease;
  outline: none;

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
