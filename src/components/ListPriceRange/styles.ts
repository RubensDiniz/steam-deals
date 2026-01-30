import styled from '@emotion/styled'
import { MediumPlusScreen } from '@/components/Theme'

// TODO! Review width!
export const RangeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.25rem;

  ${MediumPlusScreen} {
    width: 50%;
  }
`

export const RangeHeader = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #6b7280;
  letter-spacing: 0.05em;

  span.price {
    color: #66c0f4;
    font-family: monospace;
  }
`

export const RangeWrapper = styled.div`
  padding: 0 0.5rem 1rem;
`

export const RangeOuterTrack = styled.div`
  position: relative;
  height: 1.714rem;
  display: flex;

  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`

export const RangeInnerTrack = styled.div`
  width: 100%;
  height: 0.2857rem;
  align-self: center;

  border-radius: 0.1428rem;
`

export const RangeThumb = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1rem;
  height: 1rem;
  padding: 0;

  border: 1px solid #2a475e;
  border-radius: 50%;

  background-color: #f3f4f6;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  transition-duration: 0s;

  position: relative;
  border: initial;

  &::after {
    content: '';
    width: 0.4rem;
    height: 0.4rem;
    background-color: #66c0f4;
    border-radius: 50%;
  }
`

export const Mark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.857rem;
  width: 0;
  top: 2rem;

  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: monospace;
  letter-spacing: 0.05em;

  border-radius: 0.1428rem;
`
