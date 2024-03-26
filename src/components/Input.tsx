import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme['primary-900']};
  border: 1px solid ${({ theme }) => theme['primary-500']};
  border-radius: 6px;

  color: ${({ theme }) => theme['primary-200']};

  &::placeholder {
    color: ${({ theme }) => theme['primary-400']};
  }
`
