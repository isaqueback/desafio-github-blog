import { Outlet, useLocation, useMatch, useNavigate } from 'react-router-dom'
import { DefaultLayoutContainer } from './styles'
import { useEffect } from 'react'

export function DefaultLayout() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isExactRoutePost = useMatch('/post')

  useEffect(() => {
    if (isExactRoutePost) navigate('/')
  }, [pathname, isExactRoutePost, navigate])

  return (
    <DefaultLayoutContainer>
      <Outlet />
    </DefaultLayoutContainer>
  )
}
