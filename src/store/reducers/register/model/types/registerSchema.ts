export interface Register {
  firstname: string
  lastname: string
  email: string
  password: string
  confirmPassword: string
}
export interface RegisterSchema {
  regState?: Register
  error?: string
  values: Register
  isLoading: boolean
}
