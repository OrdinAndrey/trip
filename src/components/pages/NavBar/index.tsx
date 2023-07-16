import styles from './styles/navBar.module.scss'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/store/reducers/user'
import AppLink from '@/components/global/AppLink'
import BaseButton from '@/components/global/BaseButton'
import { ReactComponent as LogoutIcon } from '@/assets/icons/logout.svg'
import { ReactComponent as LoginIcon } from '@/assets/icons/login.svg'
import useNavBar from './hooks/useNavBar.ts'
import { getTripCount } from '@/store/reducers/trip'

const NavBar = () => {
  const authData = useSelector(getUserAuthData)
  const count = useSelector(getTripCount)
  const { handleClick, hamburgerRef, sidebarRef } = useNavBar()

  if (authData) {
    return (
      <div className={styles.headWrap}>
        <header className={styles.header}>
          <AppLink to={'/'} className={styles.logo}>
            Triplify
          </AppLink>

          <input
            className={styles.sideMenu}
            type='checkbox'
            defaultChecked={false}
            id='side-menu'
          />
          <label
            className={styles.hamburger}
            ref={hamburgerRef}
            htmlFor='side-menu'
          >
            <span className={styles.hamburgerLine}></span>
          </label>

          <nav className={styles.headNav} ref={sidebarRef}>
            <ul className={styles.menu}>
              <li>
                <AppLink to='/search_route'>Find a route</AppLink>
              </li>
              <li>
                <AppLink to='/list_routes' count={count}>
                  List of routes
                </AppLink>
              </li>
            </ul>
          </nav>

          <BaseButton
            type='button'
            variant='clear'
            className={styles.btnLog}
            onClick={handleClick}
          >
            <LogoutIcon width={40} height={40} fill='#fff' />
          </BaseButton>
        </header>
      </div>
    )
  }
  return (
    <div className={styles.headWrap}>
      <header className={styles.headerUnLog}>
        <AppLink to={'/'} className={styles.logo}>
          Triplify
        </AppLink>

        <AppLink to='/login' className={styles.btnLogin}>
          Login
          <LoginIcon width={40} height={40} fill='#fff' />
        </AppLink>
      </header>
    </div>
  )
}

export default NavBar
