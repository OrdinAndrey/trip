type ValuesField = {
  password?: string
  email?: string
  firstname?: string
  lastname?: string
  confirmPassword?: string
}

export const validate = (values: ValuesField) => {
  const errors: ValuesField = {}
  if (!values.email) {
    errors.email = 'Field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Field is required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long'
  }
  if (!values.firstname) {
    errors.firstname = 'Field is required'
  } else if (values.firstname.length > 15) {
    errors.firstname = 'Maximum of 15 characters'
  }
  if (!values.lastname) {
    errors.lastname = 'Field is required'
  } else if (values.lastname.length > 20) {
    errors.lastname = 'Maximum of 20 characters'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Field is required'
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match'
  }
  return errors
}
