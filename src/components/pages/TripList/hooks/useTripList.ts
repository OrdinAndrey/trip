import { TRIP_LOCALSTORAGE_KEY } from '@/utils/helpers/constants/localstorage.ts'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { tripActions } from '@/store/reducers/trip'
import { useNavigate } from 'react-router-dom'

export interface IRoute {
  date: string
  id: string
  private: boolean
}
const useTripList = () => {
  const [listRoutes, setListRoutes] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    setListRoutes(
      JSON.parse(localStorage.getItem(TRIP_LOCALSTORAGE_KEY) || '[]')
    )
  }, [])

  const handleClick = (id: string) => {
    const filteredListRouted = listRoutes.filter(
      (route: IRoute) => route.id !== id
    )
    localStorage.setItem(
      TRIP_LOCALSTORAGE_KEY,
      JSON.stringify(filteredListRouted)
    )
    dispatch(tripActions.decrement())
    setListRoutes(filteredListRouted)
  }
  const handleGoBack = (id: string) => {
    const [filteredList] = listRoutes.filter((route: IRoute) => route.id === id)
    dispatch(tripActions.setTripData(filteredList))
    navigate('/route')
  }

  return { listRoutes, handleClick, handleGoBack }
}

export default useTripList
