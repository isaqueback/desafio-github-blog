import { useContext } from 'react'
import { BuildingIcon } from '../../../../assets/svg-components/BuildingIcon'
import { GithubIcon } from '../../../../assets/svg-components/GithubIcon'
import { GithubLinkIcon } from '../../../../assets/svg-components/GithubLinkIcon'
import { UserGroupIcon } from '../../../../assets/svg-components/UserGroupIcon'
import { GithubContext } from '../../../../contexts/GithubContext'
import { ProfileContainer } from './styles'

export function Profile() {
  const { user } = useContext(GithubContext)

  return (
    <ProfileContainer>
      <img src={user.avatarUrl} alt="Minha foto de perfil" />
      <h1>{user.name}</h1>
      <div>
        <a href={user.htmlUrl} target="_blank" rel="noreferrer">
          <span>github</span>
          <GithubLinkIcon />
        </a>
      </div>
      <p>{user.bio}</p>
      <ul>
        <li>
          <GithubIcon />
          <span>{user.login}</span>
        </li>
        <li>
          {user.company ? (
            <>
              <BuildingIcon />
              <span>{user.company}</span>
            </>
          ) : (
            <>
              <BuildingIcon />
              <span>Não possui</span>
            </>
          )}
        </li>
        <li>
          <UserGroupIcon />
          {user.followers > 1 ? (
            <span>{user.followers} seguidores</span>
          ) : (
            <span>{user.followers} seguidor</span>
          )}
        </li>
      </ul>
    </ProfileContainer>
  )
}
