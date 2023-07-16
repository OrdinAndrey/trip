import { Route, Routes } from 'react-router-dom'
import MainRouter from '@/router/MainRouter.tsx'
import { routerConfig } from '@/router/config/RouterConfig.tsx'
import useRouter from '@/router/hooks/useRouter.tsx'

const AppRouter = () => {
  const { renderWithWrapper, init } = useRouter()

  return (
    <>
      {init && (
        <Routes>
          <Route path='/' element={<MainRouter />}>
            {Object.values(routerConfig).map(renderWithWrapper)}
          </Route>
        </Routes>
      )}
    </>
  )
}

export default AppRouter
