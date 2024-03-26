import { HeaderContainer, Logo } from './styles'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoImg} alt="Logo do Github Blog" />
    </HeaderContainer>
  )
}
