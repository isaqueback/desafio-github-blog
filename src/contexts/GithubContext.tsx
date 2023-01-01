import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface User {
  login: string
  avatarUrl: string
  name: string | null
  bio: string | null
  followers: number
  company: string | null
  htmlUrl: string
}

interface IssueItems {
  title: string
  body: string
  id: number
  createdAt: string
  htmlUrl: string
  comments: number
}

interface DataItemsCurrencyValue {
  id: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
}

export interface Issues {
  totalCount: number
  items: IssueItems[]
}

interface GithubContextType {
  user: User
  issues: Issues
  fetchIssues: (query?: string) => void
}

interface DataItemsType {
  title: string
  body: string
  id: number
  createdAt: string
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState({} as User)
  const [issues, setIssues] = useState({} as Issues)

  async function fetchUser() {
    const response = await api.get('users/isaqueback')
    const {
      login,
      avatar_url: avatarUrl,
      name,
      bio,
      followers,
      company,
      html_url: htmlUrl,
    } = response.data

    setUser({ login, avatarUrl, name, bio, followers, company, htmlUrl })
  }

  async function fetchIssues(query = '') {
    const response = await api.get(
      `search/issues?q=${query} repo:isaqueback/github-blog`,
    )
    const data = response.data

    const dataItems = data.items.reduce(
      (acc: DataItemsType[], cur: DataItemsCurrencyValue) => {
        const {
          id,
          title,
          body,
          created_at: createdAt,
          html_url: htmlUrl,
          comments,
        } = cur

        const item = {
          id,
          title,
          body,
          createdAt,
          htmlUrl,
          comments,
        }
        acc = [...acc, item]
        return acc
      },
      [],
    )

    setIssues({ totalCount: data.total_count, items: dataItems })
  }

  useEffect(() => {
    fetchUser()
    fetchIssues()
  }, [])

  return (
    <GithubContext.Provider value={{ user, issues, fetchIssues }}>
      {children}
    </GithubContext.Provider>
  )
}
