import { HomeContainer } from './styles'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { Posts } from './components/Posts'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Search />
      <Posts />
    </HomeContainer>
  )
}
