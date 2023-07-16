import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/store/reducers/user'
import { Navigate, useLocation } from 'react-router-dom'
import { checkLoginCookies } from '@/utils/helpers/cookies/cookies.ts'

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(getUserAuthData)
  const user = checkLoginCookies()
  const location = useLocation()
  if (!user && !auth) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}
