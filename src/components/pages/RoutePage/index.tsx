import styles from './styles/routePage.module.scss'
import { Map, YMaps } from '@pbe/react-yandex-maps'
import useRoutePage from './hooks/useRoutePage.ts'
import Trip from '@/components/pages/Trip'

const RoutePage = () => {
  const { departurePoint, destination, mapState, apiKey, getRoute, setYmaps } =
    useRoutePage()

  if (departurePoint && destination)
    return (
      <div className={styles.routePage}>
        <Trip departurePoint={departurePoint} destination={destination} />
        <div className={styles.mapWrapper}>
          <YMaps query={{ apikey: apiKey }}>
            <Map
              modules={['multiRouter.MultiRoute']}
              onLoad={(ymaps) => setYmaps(ymaps)}
              state={mapState}
              className={styles.sizeMap}
              instanceRef={(ref) => ref && getRoute(ref)}
            />
          </YMaps>
        </div>
      </div>
    )

  if (!departurePoint && !destination)
    return (
      <div className={styles.routePage}>
        <h1>Not route</h1>
      </div>
    )
}
export default RoutePage
