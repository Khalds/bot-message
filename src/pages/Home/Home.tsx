import { Chat } from '../../features'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div className={styles.root}>
      <Chat />
    </div>
  )
}
