import { Register, RegisterSchema } from '../types/registerSchema.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState: RegisterSchema = {
  values: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  },
  isLoading: false,
  error: ''
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setData: (state) => {
      state.isLoading = true
    },
    setDataSuccess: (state, action: PayloadAction<Register>) => {
      state.isLoading = false
      state.error = ''
      state.values = action.payload
    },
    setDataError: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const { actions: registerActions } = registerSlice
export const { reducer: registerReducer } = registerSlice
