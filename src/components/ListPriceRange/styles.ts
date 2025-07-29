import styled from '@emotion/styled'

export const RangeOuterTrack = styled.div`
  position: relative;
  height: 1.714rem;
  display: flex;
  width: 400px;

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
  width: 0.286rem;
  height: 1.714rem;
  padding: 0;

  border-radius: 0.1428rem;

  background-color: white;

  transition-duration: 0s;

  position: relative;
  border: initial;
`

export const Mark = styled.div`
  display: flex;
  justify-content: center;
  height: 0.857rem;
  width: 0;
  top: 2rem;

  border-radius: 0.1428rem;

  background-color: gray;
`
