import styles from './styles/trip.module.scss'
import useTripList, { IRoute } from './hooks/useTripList.ts'
import Trip from '@/components/pages/Trip'

const TripList = () => {
  const { listRoutes, handleClick, handleGoBack } = useTripList()

  return (
    <>
      {listRoutes.length > 0 ? (
        listRoutes.map((route: IRoute, index: number) => (
          <Trip
            {...route}
            key={route.id}
            businessClass={route.private}
            deleteTrip
            tripGoBack
            id={route.id}
            index={index + 1}
            onGoBack={() => handleGoBack(route.id)}
            onClick={() => handleClick(route.id)}
          />
        ))
      ) : (
        <div className={styles.notRoutes}>Not routes</div>
      )}
    </>
  )
}

export default TripList
