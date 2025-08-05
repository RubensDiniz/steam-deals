import styled from '@emotion/styled'
import Image from 'next/image'
import { SkeletonGameCardProps } from './types'
import { css } from '@emotion/react'
import { makeSkeletonBackgroundAnimation } from '@/utils'

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

// TODO! Calculate bottom padding properly?
export const SkeletonCard = styled(Card)<SkeletonGameCardProps>`
  animation: ${({ index }) =>
    index !== undefined
      ? css`
          ${makeSkeletonBackgroundAnimation('#383838', '#767676')} 3s ease infinite
        `
      : 'none'};
  animation-delay: ${({ index }) => (index ? `${0.1 * index}s` : 0)};

  padding-bottom: 2rem;
`

export const Content = styled.div`
  //max-width: 100%;
  //height: 100%;

  aspect-ratio: 2.1395;
`
