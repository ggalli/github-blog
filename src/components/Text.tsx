import styled from 'styled-components'

interface TextProps {
  size?: 'sm' | 'md'
}

export const Text = styled.p<TextProps>`
  line-height: 160%;
  font-size: ${({ size = 'md' }) => (size === 'sm' ? '14px' : '16px')};
`
