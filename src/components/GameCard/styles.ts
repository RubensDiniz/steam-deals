import styled from '@emotion/styled'
import Image from 'next/image'

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 6px;

  overflow: hidden;

  background-color: #383838;
`

export const GameImage = styled(Image)`
  max-width: 100%;
  height: auto;

  aspect-ratio: 2.1395;
`
