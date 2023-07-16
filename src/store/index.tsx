import {
  configureStore,
  DeepPartial,
  ReducersMapObject
} from '@reduxjs/toolkit'
import { StateSchema } from '@/store/types/stateShema.ts'
import { loginReducer } from '@/store/reducers/login'
import { userReducer } from '@/store/reducers/user'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { registerReducer } from '@/store/reducers/register'
import { tripReducer } from '@/store/reducers/trip'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({
  children,
  initialState
}: StoreProviderProps) => {
  function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
      user: userReducer,
      loginForm: loginReducer,
      trip: tripReducer,
      registerForm: registerReducer
    }
    return configureStore<StateSchema>({
      reducer: rootReducers,
      devTools: true,
      preloadedState: initialState
    })
  }
  const store = createReduxStore(initialState as StateSchema)
  return <Provider store={store}>{children}</Provider>
}
