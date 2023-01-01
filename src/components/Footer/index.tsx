import { FooterContainer } from './styles'
import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext'

export function Footer() {
  const { user } = useContext(GithubContext)

  return (
    <FooterContainer>
      <span>Developed by&nbsp;</span>
      <a
        target="_blank"
        href={`https://github.com/${user.login}`}
        rel="noreferrer"
      >
        {user.name}
      </a>
    </FooterContainer>
  )
}
