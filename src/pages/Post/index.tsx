import { Link, useParams } from 'react-router-dom'
import {
  PostContainer,
  PostDescriptionContainer,
  PostTitleContainer,
} from './styles'
import { LeftAngleIcon } from '../../assets/svg-components/LeftAngleIcon'
import { GithubLinkIcon } from '../../assets/svg-components/GithubLinkIcon'
import { GithubIcon } from '../../assets/svg-components/GithubIcon'
import { CalendarDayIcon } from '../../assets/svg-components/CalendarDayIcon'
import { CommentIcon } from '../../assets/svg-components/CommentIcon'

export function Post() {
  const { postId } = useParams()

  return (
    <PostContainer>
      <PostTitleContainer>
        <div id="post-title-container-toolbar">
          <Link to="/">
            <LeftAngleIcon />
            <span>voltar</span>
          </Link>
          <a
            href="https://github.com/isaqueback"
            target="_blank"
            rel="noreferrer"
          >
            <span>ver no github</span>
            <GithubLinkIcon />
          </a>
        </div>

        <h1>JavaScript data types and data structures</h1>

        <div id="post-title-container-footer">
          <div>
            <GithubIcon />
            <span>isaqueback</span>
          </div>

          <div>
            <CalendarDayIcon />
            <span>Há 1 dia</span>
          </div>

          <div>
            <CommentIcon />
            <span>5 comentários</span>
          </div>
        </div>
      </PostTitleContainer>

      <PostDescriptionContainer>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </PostDescriptionContainer>
    </PostContainer>
  )
}
