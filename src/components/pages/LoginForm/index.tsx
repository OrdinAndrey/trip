import styles from './styles/login.module.scss'
import BaseInput from '@/components/global/BaseInput'
import AppLink from '@/components/global/AppLink'
import useLogin from './hooks/useLogin.ts'
import BaseButton from '@/components/global/BaseButton'

const LoginForm = () => {
  const { formControl, authData } = useLogin()

  if (authData) {
    return (
      <div className={styles.loginAuth}>
        <h1>Вы авторизованы</h1>
      </div>
    )
  }
  return (
    <div className={styles.loginForm}>
      <form onSubmit={formControl.handleSubmit}>
        <h1>Login</h1>
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
            placeholder='Password'
            className={styles.inputAcc}
            onBlur={formControl.handleBlur}
            onChange={formControl.handleChange}
            value={formControl.values.password}
            fieldPassword={true}
            errorText={
              formControl.touched.password && formControl.errors.password
                ? formControl.errors.password
                : ''
            }
          />
        </div>
        <div className={styles.formLog}>
          <BaseButton variant='light' className={styles.btnLog} type='submit'>
            Login
          </BaseButton>
          <AppLink to='/register' className={styles.formLink}>
            Register
          </AppLink>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
