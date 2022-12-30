import {
  HomeContainer,
  PostsContainer,
  ProfileContainer,
  SearchContainer,
} from './styles'
import minhaFoto from '../../assets/minha foto.jpg'
import { GithubLinkIcon } from '../../assets/svg-components/GithubLinkIcon'
import { GithubIcon } from '../../assets/svg-components/GithubIcon'
import { BuildingIcon } from '../../assets/svg-components/BuildingIcon'
import { UserGroupIcon } from '../../assets/svg-components/UserGroupIcon'

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <img src={minhaFoto} alt="minha foto de perfil" />
        <h1>Isaque Delfino</h1>
        <div>
          <a
            href="https://github.com/isaqueback"
            target="_blank"
            rel="noreferrer"
          >
            <span>github</span>
            <GithubLinkIcon />
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          explicabo labore sed, voluptatum suscipit consectetur cumque possimus
          ullam provident placeat officia in facere, eaque nemo. Velit neque
          deserunt corporis accusantium!

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          explicabo labore sed, voluptatum suscipit consectetur cumque possimus
          ullam provident placeat officia in facere, eaque nemo. Velit neque
          deserunt corporis accusantium!
        </p>
        <ul>
          <li>
            <GithubIcon />
            <span>isaqueback</span>
          </li>
          <li>
            <BuildingIcon />
            <span>Brunswick Marine</span>
          </li>
          <li>
            <UserGroupIcon />
            <span>0 seguidor</span>
          </li>
        </ul>
      </ProfileContainer>

      <SearchContainer>
        <div>
          <h3>Publicações</h3>
          <span>4 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>

      <PostsContainer>
        <a href="" target={'_blank'}>
          <section>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 dia</span>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
            </p>
          </section>
        </a>

        <a href="" target={'_blank'}>
          <section>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 11 meses</span>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
            </p>
          </section>
        </a>

        <a href="" target="_blank">
          <section>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 semana</span>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </section>
        </a>

        <a href="" target="_blank">
          <section>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 ano</span>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </section>
        </a>
      </PostsContainer>
    </HomeContainer>
  )
}
