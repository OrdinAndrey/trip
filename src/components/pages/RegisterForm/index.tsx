import styles from './styles/register.module.scss'
import BaseButton from '@/components/global/BaseButton'
import BaseInput from '@/components/global/BaseInput'
import AppLink from '@/components/global/AppLink'
import useRegister from './hooks/useRegister.ts'

const RegisterForm = () => {
  const { formControl, authData } = useRegister()
  if (authData) {
    return (
      <div className={styles.registerAuth}>
        <h1>Вы уже зарегистрированы</h1>
      </div>
    )
  }
  return (
    <div className={styles.registerForm}>
      <form onSubmit={formControl.handleSubmit}>
        <h1>Register</h1>
        <div className={styles.wrapName}>
          <div className={styles.formName}>
            <BaseInput
              type='text'
              name='firstname'
              placeholder='First Name'
              className={styles.inputReg}
              onBlur={formControl.handleBlur}
              onChange={formControl.handleChange}
              value={formControl.values.firstname}
              errorText={
                formControl.touched.firstname && formControl.errors.firstname
                  ? formControl.errors.firstname
                  : ''
              }
            />
          </div>
          <div className={styles.formName}>
            <BaseInput
              type='text'
              name='lastname'
              placeholder='Last Name'
              className={styles.inputReg}
              onBlur={formControl.handleBlur}
              onChange={formControl.handleChange}
              value={formControl.values.lastname}
              errorText={
                formControl.touched.lastname && formControl.errors.lastname
                  ? formControl.errors.lastname
                  : ''
              }
            />
          </div>
        </div>

        <div className={styles.formAcc}>
          <BaseInput
            name='email'
            type='email'
            placeholder='Email'
            className={styles.inputAcc}
            onBlur={formControl.handleBlur}
            onChange={formControl.handleChange}
            value={formControl.values.email}
            errorText={
              formControl.touched.email && formControl.errors.email
                ? formControl.errors.email
                : ''
            }
          />

          <BaseInput
            name='password'
            fieldPassword={true}
            placeholder='Password'
            className={styles.inputAcc}
            onBlur={formControl.handleBlur}
            onChange={formControl.handleChange}
            value={formControl.values.password}
            errorText={
              formControl.touched.password && formControl.errors.password
                ? formControl.errors.password
                : ''
            }
          />

          <BaseInput
            name='confirmPassword'
            fieldPassword={true}
            placeholder='Confirm Password'
            className={styles.inputAcc}
            onBlur={formControl.handleBlur}
            onChange={formControl.handleChange}
            value={formControl.values.confirmPassword}
            errorText={
              formControl.touched.confirmPassword &&
              formControl.errors.confirmPassword
                ? formControl.errors.confirmPassword
                : ''
            }
          />
        </div>
        <div className={styles.formReg}>
          <AppLink to='/login' className={styles.formLink}>
            Login
          </AppLink>
          <BaseButton variant='light' className={styles.btnReg} type='submit'>
            Register
          </BaseButton>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
