import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Login, LoginSchema } from '../types/loginSchema'

export const initialState: LoginSchema = {
  loginState: {}
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Login>) => {
      state.values = action.payload
    }
  }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
