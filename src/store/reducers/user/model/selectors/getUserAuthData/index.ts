import { StateSchema } from '@/store/types/stateShema.ts'

export const getUserAuthData = (state: StateSchema) => state.user.authData
