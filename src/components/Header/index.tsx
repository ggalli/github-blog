import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Logo do Github Blog" />
    </HeaderContainer>
  )
}
