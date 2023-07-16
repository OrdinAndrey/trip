import { useFormik } from 'formik'
import { validateTrip } from '@/utils/formik/validators/validateTrip.ts'
import { TRIP_LOCALSTORAGE_KEY } from '@/utils/helpers/constants/localstorage.ts'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tripActions } from '@/store/reducers/trip'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'

const useSearchRoute = () => {
  const apiKey = import.meta.env.VITE_YANDEX_KEY
  const nowDate = moment().format('YYYY-MM-DDTHH:mm')
  const currentDate = moment()
  const futureDate = currentDate.add(10, 'days').format('YYYY-MM-DDTHH:mm')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  let arrTrips: Array<object> = []
  const formControl = useFormik({
    initialValues: {
      date: '',
      departurePoint: '',
      destination: '',
      numberOfPassengers: '',
      private: false
    },
    validate: validateTrip,
    onSubmit: (values, { resetForm }) => {
      function checkCityExistence(city: string) {
        return new Promise((resolve, reject) => {
          const apiUrl = `https://geocode-maps.yandex.ru/1.x?geocode=${city}&apikey=${apiKey}&format=json`

          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              const found =
                data.response.GeoObjectCollection.featureMember.length > 0

              resolve(found)
            })
            .catch((error) => {
              reject(error)
            })
        })
      }
      Promise.all([
        checkCityExistence(values.departurePoint),
        checkCityExistence(values.destination)
      ])
        .then(([city1Exists, city2Exists]) => {
          if (city1Exists && city2Exists) {
            const savedTrips = JSON.parse(
              localStorage.getItem(TRIP_LOCALSTORAGE_KEY) || '[]'
            )

            if (savedTrips !== null) {
              arrTrips = [...savedTrips]
            }

            const isRouteExists = arrTrips.some(
              (trip) => JSON.stringify(trip) === JSON.stringify(values)
            )
            function getRandomTo(to: number): number {
              return Math.ceil(Math.random() * to)
            }

            function genHex(): string {
              let result = ''
              for (let index = 0; index < 16; index++) {
                result += getRandomTo(15).toString(16)
              }
              return result
            }

            const id = genHex()
            resetForm()
            if (!isRouteExists) {
              const newValue = { ...values, id }
              arrTrips.push(newValue)
              localStorage.setItem(
                TRIP_LOCALSTORAGE_KEY,
                JSON.stringify(arrTrips)
              )
              dispatch(tripActions.setTripData(newValue))
              dispatch(tripActions.increment())
              navigate('/route')
            } else {
              setError('Route with such data already exists')
            }
          } else {
            setError('City was not found, try entering another name')
          }
        })
        .catch((error) => {
          setError(error)
        })
    }
  })
  return { formControl, error, nowDate, futureDate }
}
export default useSearchRoute
