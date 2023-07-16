export interface Trip {
  departurePoint: string
  destination: string
  date: string
  numberOfPassengers: number | string
  private: boolean
  id?: string
}
export interface TripSchema {
  tripData?: Trip
  values: Trip
  count: number
}
