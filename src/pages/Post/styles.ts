import styled from 'styled-components'

export const PostContent = styled.div`
  padding: 0 40px;
  margin-top: -48px;

  .markdown {
    img {
      width: 100%;
    }

    p,
    h1,
    h2,
    h3,
    ul {
      margin-bottom: 16px;
    }

    ul {
      list-style: inside;
      margin-left: 16px;
    }
  }
`

export const ProfileContainer = styled.div`
  padding: 32px 40px;
  background-color: ${({ theme }) => theme['primary-700']};
  border-radius: 10px;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  position: relative;
  top: -88px;
  min-height: 168px;
`

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`

export const PostInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  gap: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme['primary-300']};

    & svg {
      width: 18px;
      height: 18px;
      color: ${({ theme }) => theme['primary-400']};
    }
  }
`
