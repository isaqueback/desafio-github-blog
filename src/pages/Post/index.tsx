import { GithubContext } from '../../contexts/GithubContext'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import {
  PostContainer,
  PostDescriptionContainer,
  PostTitleContainer,
} from './styles'
import { Link } from 'react-router-dom'
import { LeftAngleIcon } from '../../assets/svg-components/LeftAngleIcon'
import { GithubLinkIcon } from '../../assets/svg-components/GithubLinkIcon'
import { GithubIcon } from '../../assets/svg-components/GithubIcon'
import { CalendarDayIcon } from '../../assets/svg-components/CalendarDayIcon'
import { CommentIcon } from '../../assets/svg-components/CommentIcon'
import { dateFormatter } from '../../utils/formatter'
import ReactMarkdown from 'react-markdown'

interface Issue {
  title: string
  body: string
  issueUrl: string
  comments: number
  createdAt: string
  userLogin: string
}

export function Post() {
  const { issues, user } = useContext(GithubContext)
  const [issue, setIssue] = useState({} as Issue)
  const { postId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (issues.totalCount) {
      const postIndex = issues.items.findIndex(
        (item) => item.id === Number(postId),
      )

      if (postIndex !== -1) {
        setIssue({
          title: issues.items[postIndex].title,
          body: issues.items[postIndex].body,
          issueUrl: issues.items[postIndex].htmlUrl,
          comments: issues.items[postIndex].comments,
          createdAt: issues.items[postIndex].createdAt,
          userLogin: issues.items[postIndex].title,
        })
      } else {
        navigate('/')
      }
    }
  }, [issues, navigate, postId])

  return (
    <PostContainer>
      <PostTitleContainer>
        <div id="post-title-container-toolbar">
          <Link to="/">
            <LeftAngleIcon />
            <span>voltar</span>
          </Link>
          <a href={issue.issueUrl} target="_blank" rel="noreferrer">
            <span>ver no github</span>
            <GithubLinkIcon />
          </a>
        </div>

        <h1>{issue.title}</h1>

        <div id="post-title-container-footer">
          <div>
            <GithubIcon />
            <span>{user.login}</span>
          </div>

          <div>
            <CalendarDayIcon />
            <span>{issue.createdAt && dateFormatter(issue.createdAt)}</span>
          </div>

          <div>
            <CommentIcon />
            <span>
              {issue.comments > 1
                ? `${issue.comments} comentários`
                : `${issue.comments} comentário`}
            </span>
          </div>
        </div>
      </PostTitleContainer>

      <PostDescriptionContainer>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </PostDescriptionContainer>
    </PostContainer>
  )
}
