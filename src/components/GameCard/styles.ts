import styled from '@emotion/styled'
import Image from 'next/image'

export const Card = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;

  border-radius: 6px;

  overflow: hidden;

  background-color: #383838;
`

export const GameImage = styled(Image)`
  max-width: 100%;
  height: 100%;

  aspect-ratio: 2.1395;
`
