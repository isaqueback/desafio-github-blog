import { HeaderContainer } from './styles'
import { HeaderLeftEffectIcon } from '../../assets/svg-components/HeaderLeftEffectIcon'
import { LogoIcon } from '../../assets/svg-components/LogoIcon'
import { HeaderRightEffectIcon } from '../../assets/svg-components/HeaderRightEffectIcon'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLeftEffectIcon />
      <LogoIcon />
      <HeaderRightEffectIcon />
    </HeaderContainer>
  )
}
