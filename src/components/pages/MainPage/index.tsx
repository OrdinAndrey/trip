import styles from './styles/main.module.scss'
import AppLink from '@/components/global/AppLink'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/store/reducers/user'

const MainPage = () => {
  const authData = useSelector(getUserAuthData)
  if (authData)
    return (
      <div className={styles.container}>
        <div>Please create trip using the </div>
        <AppLink to='/search_route' className={styles.head}>
          search route.
        </AppLink>
      </div>
    )
  return (
    <div className={styles.container}>
      <div>To search for a trip, you need to </div>
      <AppLink to='/search_route' className={styles.head}>
        login.
      </AppLink>
    </div>
  )
}

export default MainPage
