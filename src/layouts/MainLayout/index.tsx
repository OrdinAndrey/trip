import styles from './styles/mainLayout.module.scss'
import { ReactElement } from 'react'
import * as classNames from 'classnames'

interface PropsInterface {
  className?: string
  header: ReactElement
  content: ReactElement
}
const MainLayout = ({ className, content, header }: PropsInterface) => {
  return (
    <>
      <section className={classNames(styles.layout, className)}>
        <header className={styles.header}>{header}</header>
        <main className={styles.content}>{content}</main>
      </section>
    </>
  )
}

export default MainLayout
