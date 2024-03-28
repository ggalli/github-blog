import styled from 'styled-components'
import { Text } from '../Text'

export const PostCardContainer = styled.div`
  width: 100%;
  height: 260px;
  padding: 32px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme['primary-600']};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['primary-400']};
  }

  > h3 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    color: ${({ theme }) => theme['primary-50']};
    margin-bottom: 20px;

    > span {
      color: ${({ theme }) => theme['primary-300']};
      flex-shrink: 0;
    }
  }

  > ${Text} {
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
  }
`
