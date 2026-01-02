import styled from '@emotion/styled'
import { LargeScreen, MediumScreen, WideScreen } from '@/components/Theme'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 1.5rem 5rem 1.5rem;

  border-bottom: solid 1px white;

  background: #0a0a0a;

  top: 0;
  left: 0;
  right: 0;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  width: 22.857rem;

  ${MediumScreen} {
    width: 46.714rem;
  }

  ${LargeScreen} {
    width: 70.571rem;
  }

  ${WideScreen} {
    width: 94.429rem;
  }
`
