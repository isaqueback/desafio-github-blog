import { HeaderContainer } from './styles'
import { HeaderLeftEffect } from './components/HeaderLeftEffect'
import { Logo } from './components/Logo'
import { HeaderRightEffect } from './components/HeaderRightEffect'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLeftEffect />
      <Logo />
      <HeaderRightEffect />
    </HeaderContainer>
  )
}
