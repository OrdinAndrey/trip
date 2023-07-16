import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  User,
  UserSchema
} from '@/store/reducers/user/model/types/userSchema.ts'
import { checkLoginCookies } from '@/utils/helpers/cookies/cookies.ts'

export const initialState: UserSchema = {
  _initialization: false,
  loggedIn: false,
  authData: checkLoginCookies()
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
      state.loggedIn = true
    },
    initAuthData: (state) => {
      state._initialization = true
    },
    logOut: (state) => {
      state.authData = undefined
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
