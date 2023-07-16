import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Trip, TripSchema } from '../types/tripSchema'

export const initialState: TripSchema = {
  values: {
    departurePoint: '',
    destination: '',
    id: '',
    date: '',
    numberOfPassengers: 1,
    private: true
  },
  count: 0
}

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setTripData: (state, action: PayloadAction<Trip>) => {
      state.values = action.payload
    },
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  }
})

export const { actions: tripActions } = tripSlice
export const { reducer: tripReducer } = tripSlice
