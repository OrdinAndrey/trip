export interface PropsInterface {
  departurePoint?: string
  destination?: string
  date?: string
  onClick?: () => void
  onGoBack?: () => void
  id?: string
  index?: number
  businessClass?: boolean
  deleteTrip?: boolean
  tripGoBack?: boolean
}
