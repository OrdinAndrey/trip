type ValuesTrip = {
  departurePoint?: string
  destination?: string
  date?: string
  numberOfPassengers?: number | string
}

export const validateTrip = (values: ValuesTrip) => {
  const errors: ValuesTrip = {}
  if (!values.departurePoint) {
    errors.departurePoint = 'Field is required'
  } else if (values.departurePoint.length < 2) {
    errors.departurePoint = 'Departure city must be at least 2 characters'
  }
  if (!values.destination) {
    errors.destination = 'Field is required'
  } else if (values.destination.length < 2) {
    errors.destination = 'Destination city must be at least 2 characters'
  }
  if (!values.date) {
    errors.date = 'Field is required'
  }
  if (!values.numberOfPassengers) {
    errors.numberOfPassengers = 'Field is required'
  }

  return errors
}
