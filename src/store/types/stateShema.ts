import { LoginSchema } from '@/store/reducers/login'
import { UserSchema } from '@/store/reducers/user'
import { RegisterSchema } from '@/store/reducers/register'
import { TripSchema } from '@/store/reducers/trip'

export interface StateSchema {
  loginForm: LoginSchema
  user: UserSchema
  trip: TripSchema
  registerForm: RegisterSchema
}
