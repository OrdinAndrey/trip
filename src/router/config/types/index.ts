import { RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}
export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  REGISTER = 'register',
  SEARCH_ROUTE = 'search_route',
  LIST_ROUTES = 'list_routes',
  NOT_FOUND = 'not_found',
  ROUTE_PAGE = 'route'
}
