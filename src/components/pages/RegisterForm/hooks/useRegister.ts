import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { validate } from '@/utils/formik/validators/validate.ts'
import { registerActions } from '@/store/reducers/register'
import { setCookieDays } from '@/utils/helpers/cookies/cookies.ts'
import { getUserAuthData } from '@/store/reducers/user'
import { useNavigate } from 'react-router-dom'

const useRegister = () => {
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formControl = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      lastname: '',
      firstname: ''
    },
    validate,
    onSubmit: async (values) => {
      try {
        dispatch(registerActions.setData())
        await dispatch(registerActions.setDataSuccess(values))
        setCookieDays(values.email, values, 30)
        navigate('/login')
      } catch (e: any) {
        dispatch(registerActions.setDataError(e.message))
      }
    }
  })
  return { formControl, authData }
}
export default useRegister
