import styles from './styles/input.module.scss'
import * as classNames from 'classnames'
import { PropsInterface } from './types'
import useBaseInput from '@/components/global/BaseInput/hooks/useBaseInput.ts'

const BaseInput = ({
  className,
  value,
  onChange,
  placeholder,
  errorText,
  fieldPassword,
  ...otherProps
}: PropsInterface) => {
  const { handleToggle, Eye, EyeOff, type } = useBaseInput()
  return (
    <>
      <div className={styles.wrapper}>
        <input
          className={classNames(styles.input, className)}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...otherProps}
        />

        {fieldPassword && (
          <span className={styles.inputEye} onClick={handleToggle}>
            {type === 'password' ? (
              <Eye width={40} height={40} className={styles.inputFont} />
            ) : (
              <EyeOff width={40} height={40} className={styles.inputFont} />
            )}
          </span>
        )}
      </div>
      <p className={styles.error}>{errorText}</p>
    </>
  )
}

export default BaseInput
