import { styled } from 'styled-components'

export const PostsContainer = styled.div`
  margin-top: -16px;
`

export const PostsHeader = styled.div`
  > h2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme['primary-300']};
    font-weight: 400;
  }
`
