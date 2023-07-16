import { StateSchema } from '@/store/types/stateShema.ts'

export const getTripCount = (state: StateSchema) => state.trip.count
