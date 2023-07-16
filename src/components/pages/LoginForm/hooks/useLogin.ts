import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '@/store/reducers/login'
import { validateLogin } from '@/utils/formik/validators/validateLogin.ts'
import {
  checkCookies,
  setCookieMinutes
} from '@/utils/helpers/cookies/cookies.ts'
import { getUserAuthData, userActions } from '@/store/reducers/user'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const authData = useSelector(getUserAuthData)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formControl = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: validateLogin,
    onSubmit: (values) => {
      dispatch(loginActions.setData(values))
      const userAuth = checkCookies(values)
      if (userAuth) {
        dispatch(userActions.setAuthData(values))
        setCookieMinutes(values)
      }
      navigate('/search_route')
    }
  })
  return { formControl, authData }
}
export default useLogin
