import { AppRoutesProps } from '@/router/config/types'
import { Route } from 'react-router-dom'
import { RequireAuth } from '@/router/requireAuth.tsx'
import { useSelector } from 'react-redux'
import { getUserInitiated } from '@/store/reducers/user'

const useRouter = () => {
  localStorage.clear()
  const init = useSelector(getUserInitiated)
  const renderWithWrapper = (route: AppRoutesProps) => {
    const element = <div className='page-wrapper'>{route.element} </div>
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    )
  }
  return { renderWithWrapper, init }
}
export default useRouter
