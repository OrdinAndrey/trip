import styles from './styles/button.module.scss'
import * as classNames from 'classnames'
import { PropsInterface } from './types'

const BaseButton = ({
  className,
  children,
  variant = 'dark',
  onClick,
  ...otherProps
}: PropsInterface) => {
  return (
    <>
      <button
        className={classNames(styles.button, className, styles[variant])}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
    </>
  )
}
BaseButton.defaultProps = {
  type: 'button'
}
export default BaseButton
