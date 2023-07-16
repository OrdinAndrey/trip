import { StateSchema } from '@/store/types/stateShema.ts'

export const getUserInitiated = (state: StateSchema) =>
  state.user._initialization
