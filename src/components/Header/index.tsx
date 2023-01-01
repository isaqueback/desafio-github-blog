import { HeaderContainer } from './styles'
import { HeaderLeftEffectIcon } from '../../assets/svg-components/HeaderLeftEffectIcon'
import { LogoIcon } from '../../assets/svg-components/LogoIcon'
import { HeaderRightEffectIcon } from '../../assets/svg-components/HeaderRightEffectIcon'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLeftEffectIcon />
      <Link to="/">
        <LogoIcon />
      </Link>
      <HeaderRightEffectIcon />
    </HeaderContainer>
  )
}
