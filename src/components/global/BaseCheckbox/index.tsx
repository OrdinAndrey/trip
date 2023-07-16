import styles from './styles/baseCheckbox.module.scss'
import { useId } from 'react'
import * as classNames from 'classnames'
import { PropsInterface } from './types'

const BaseCheckbox = ({
  type = 'checkbox',
  className,
  value,
  onChange,
  ...otherProps
}: PropsInterface) => {
  const checkBoxId = useId()

  return (
    <div className={styles.wrapper}>
      <label className={styles.checkboxEllipse} id={checkBoxId}>
        <input
          className={classNames(styles.checkbox, className)}
          type={type}
          id={checkBoxId}
          value={value}
          onChange={onChange}
          {...otherProps}
        />

        <span className={styles.checkmark}></span>
      </label>
    </div>
  )
}

export default BaseCheckbox
