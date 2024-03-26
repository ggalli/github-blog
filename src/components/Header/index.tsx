import { HeaderContainer, Logo } from './styles'
import { Profile } from '../Profile'
import { Container } from '../Container'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoImg} alt="Logo do Github Blog" />

      <Container>
        <Profile />
      </Container>
    </HeaderContainer>
  )
}
