import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '@/store/reducers/user'
import { MutableRefObject, useEffect, useRef } from 'react'

const useNavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sidebarRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const hamburgerRef: MutableRefObject<HTMLLabelElement | null> = useRef(null)
  const handleClick = () => {
    document.cookie = 'user=;max-age=-1'
    dispatch(userActions.logOut())
    navigate('/login')
  }
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as HTMLElement) &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as HTMLElement)
      ) {
        if (checkbox && checkbox.checked) {
          checkbox.checked = false
        }
      }
    }

    const checkbox = document.getElementById('side-menu') as HTMLInputElement

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])
  return { handleClick, hamburgerRef, sidebarRef }
}
export default useNavBar
