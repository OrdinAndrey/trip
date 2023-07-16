import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getTripState } from '@/store/reducers/trip'

const useRoutePage = () => {
  const apiKey = import.meta.env.VITE_YANDEX_KEY
  const mapState = { center: [55.750625, 37.626], zoom: 7 }
  const [ymaps, setYmaps] = useState(null)
  const routes = useRef(null)
  const { departurePoint, destination } = useSelector(getTripState)

  const getRoute = (ref) => {
    if (ymaps) {
      const multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: [departurePoint, destination],
          params: {
            results: 2
          }
        },
        {
          boundsAutoApply: true,
          routeActiveStrokeWidth: 6,
          routeActiveStrokeColor: '#002afa'
        }
      )
      routes.current = multiRoute
      ref.geoObjects.add(multiRoute)
    }
  }

  return {
    departurePoint,
    destination,
    mapState,
    apiKey,
    getRoute,
    setYmaps
  }
}
export default useRoutePage
