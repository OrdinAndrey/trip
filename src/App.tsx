import AppRouter from '@/router'
import './styles/index.scss'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { userActions } from '@/store/reducers/user'
import MainLayout from '@/layouts/MainLayout'
import NavBar from '@/components/pages/NavBar'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <>
      <MainLayout header={<NavBar />} content={<AppRouter />} />
    </>
  )
}

export default App
