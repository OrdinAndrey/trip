export interface User {
  email: string
  password: string
}

export interface UserSchema {
  authData?: User
  _initialization: boolean
  loggedIn: boolean
}
