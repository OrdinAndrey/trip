import styles from './styles/listRoutes.module.scss'
import TripList from '@/components/pages/TripList'

const ListRoutes = () => {
  return (
    <div className={styles.listRoutes}>
      <TripList />
    </div>
  )
}

export default ListRoutes
