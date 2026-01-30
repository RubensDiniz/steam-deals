import styled from '@emotion/styled'

export const TooltipTrigger = styled.span`
  width: fit-content;
  display: inline-block;
`

export const TooltipWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 15rem;
  gap: 0.429rem;
  padding: 0.857rem;

  white-space: normal;

  border-radius: 0.214rem;

  background-color: hsla(215, 32%, 10%, 0.95);

  font:
    600 0.85714rem/1.4 'Inter',
    sans-serif;
  color: ${({ theme }) => theme.colors.card.title};
  text-align: center;

  z-index: 10;
`
