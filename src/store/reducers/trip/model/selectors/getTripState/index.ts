import { StateSchema } from '@/store/types/stateShema.ts'

export const getTripState = (state: StateSchema) => state.trip.values
