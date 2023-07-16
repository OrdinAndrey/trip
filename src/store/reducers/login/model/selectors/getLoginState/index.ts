import { StateSchema } from '@/store/types/stateShema.ts'

export const getLoginState = (state: StateSchema) => state.loginForm.values
