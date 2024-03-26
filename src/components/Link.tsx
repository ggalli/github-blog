import styled from 'styled-components'

export const Link = styled.a`
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 8px;

  color: ${({ theme }) => theme.secondary};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  &:hover::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    bottom: -1px;
    background-color: ${({ theme }) => theme.secondary};
  }

  > svg {
    width: 12px;
    height: 12px;
  }
`
