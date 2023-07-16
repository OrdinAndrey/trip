interface ValuesLogin {
  password?: string
  email?: string
}

export const validateLogin = (values: ValuesLogin) => {
  const errors: ValuesLogin = {}
  if (!values.email) {
    errors.email = 'Field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Field is required'
  }
  return errors
}
