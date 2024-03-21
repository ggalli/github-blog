import { styled } from 'styled-components'
import bgImg from '../../assets/Cover.jpg'

export const HeaderContainer = styled.div`
  height: 296px;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    position: relative;
    top: 64px;
  }
`
