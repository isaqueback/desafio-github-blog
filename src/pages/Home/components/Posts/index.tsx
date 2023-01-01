import { useContext } from 'react'
import { PostsContainer } from './styles'
import { GithubContext } from '../../../../contexts/GithubContext'
import { Link } from 'react-router-dom'
import { dateFormatter } from '../../../../utils/formatter'

export function Posts() {
  const { issues } = useContext(GithubContext)

  return (
    <PostsContainer>
      {issues.items
        ? issues.items.map((post) => {
            return (
              <Link key={post.id} to={`post/${post.id}`} target={'_blank'}>
                <section>
                  <h2>{post.title}</h2>
                  <span>{dateFormatter(post.createdAt)}</span>
                  <p>{post.body}</p>
                </section>
              </Link>
            )
          })
        : ''}
    </PostsContainer>
  )
}
