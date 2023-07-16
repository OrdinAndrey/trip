import styles from './styles/appLink.module.scss'
import { LinkProps, NavLink } from 'react-router-dom'
import * as classNames from 'classnames'

interface PropsInterface extends LinkProps {
  className?: string
  count?: number
}
const AppLink = ({
  to,
  className,
  children,
  count,
  ...otherProps
}: PropsInterface) => {
  const classes = count === 0 ? 'disable' : 'appLink'
  return (
    <>
      <NavLink
        to={to}
        className={classNames(styles[classes], className)}
        {...otherProps}
      >
        {children}
        {count! > -1 && (
          <span className={count === 0 ? styles.badgeDisable : styles.badge}>
            {count}
          </span>
        )}
      </NavLink>
    </>
  )
}

export default AppLink
