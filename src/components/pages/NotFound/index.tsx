import styles from './styles/notFound.module.scss'
import * as classNames from 'classnames'

const NotFound = () => {
  return (
    <>
      <div className={classNames(styles.notFound)}>
        <h1>Not found</h1>
      </div>
    </>
  )
}

export default NotFound
