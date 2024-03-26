import { styled } from 'styled-components'
import bgImg from '../../assets/Cover.jpg'

export const HeaderContainer = styled.div`
  height: 296px;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  position: relative;
  top: 64px;
`
