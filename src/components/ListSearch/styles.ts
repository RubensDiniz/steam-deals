import styled from '@emotion/styled'

export const ListSearchWrapper = styled.div`
  flex: 1;
  position: relative;
  height: 100%;

  > span {
    position: absolute;
    user-select: none;
  }
`

// TODO!
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 2.5rem;

  border-radius: 2px;
  border: 1px solid #3c4b60;

  color: white;
  font-size: 1.286rem;
  font-weight: 400;

  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);

  outline: none;
  transition: all 0.3s ease;

  background-color: #2a475e;

  &::placeholder {
    color: #738895;
  }

  &:focus {
    border-color: #66c0f4;
    background: #25334d;
    box-shadow:
      0 0 0 1px #66c0f4,
      inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`

export const SearchIcon = styled.span`
  top: 0.571rem;
  left: 0.429rem;
`

export const ResetIcon = styled.span`
  padding: 0.286rem;
  top: 0.286rem;
  right: 0.286rem;

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;

  cursor: pointer;
`
