import { styled } from 'styled-components'

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`

export const PostsSearchField = styled.form`
  margin-top: -16px;
  margin-bottom: 48px;

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
