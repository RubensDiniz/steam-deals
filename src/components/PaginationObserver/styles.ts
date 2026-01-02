import styled from '@emotion/styled'

export const RelativeParent = styled.div`
  position: relative;

  > span {
    display: inline-block;
  }
`

interface ObserverProps {
  offset: number
}

export const Observer = styled.div<ObserverProps>`
  position: absolute;
  pointer-events: none;
  z-index: -1;

  bottom: 0;
  left: 50%;
  height: ${({ offset }) => `${offset}px`};
`
