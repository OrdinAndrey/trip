import Main from '@/views/Main.tsx'
import LoginForm from '@/components/pages/LoginForm'
import RegisterForm from '@/components/pages/RegisterForm'
import SearchRoute from '@/components/pages/SearchRoute'
import NotFound from '@/components/pages/NotFound'
import { AppRoutes, AppRoutesProps } from '@/router/config/types'
import { RoutePath } from '@/router/config/constants'
import RoutePage from '@/components/pages/RoutePage'
import ListRoutes from '@/components/pages/ListRoutes'

export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main />
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginForm />
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: <RegisterForm />
  },
  [AppRoutes.SEARCH_ROUTE]: {
    path: RoutePath.search_route,
    element: <SearchRoute />,
    authOnly: true
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />
  },
  [AppRoutes.LIST_ROUTES]: {
    path: RoutePath.list_routes,
    element: <ListRoutes />,
    authOnly: true
  },
  [AppRoutes.ROUTE_PAGE]: {
    path: RoutePath.route,
    element: <RoutePage />,
    authOnly: true
  }
}
