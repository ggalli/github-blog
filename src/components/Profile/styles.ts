import styled from 'styled-components'

export const ProfileCard = styled.div`
  padding: 32px 40px;
  background-color: ${({ theme }) => theme['primary-700']};
  display: flex;
  gap: 32px;
  border-radius: 10px;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  position: relative;
  top: 110px;
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  gap: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme['primary-100']};

    & svg {
      width: 18px;
      height: 18px;
      color: ${({ theme }) => theme['primary-400']};
    }
  }
`
