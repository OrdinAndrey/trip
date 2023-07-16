import { AppRoutes } from '../types'

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',
  [AppRoutes.SEARCH_ROUTE]: '/search_route',
  [AppRoutes.ROUTE_PAGE]: '/route',
  [AppRoutes.LIST_ROUTES]: '/list_routes',
  [AppRoutes.NOT_FOUND]: '*'
}
