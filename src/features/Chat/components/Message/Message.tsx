import styles from './Message.module.scss'
import { FC } from 'react'
import BotIcon from '../../../../assets/robot.svg'
import classNames from 'classnames'
import { TMessage } from '../../../../app/types'

type TProps = TMessage & { loading?: boolean }

export const Message: FC<TProps> = ({ isBot, messageText, loading }) => {
  return (
    <div className={classNames(styles.message, { [styles.isBot]: isBot })}>
      <div
        className={classNames(styles.avatarWrapper, {
          [styles.botAvatar]: isBot
        })}
      >
        {isBot ? (
          <img src={BotIcon} alt="" className={styles.botIcon} />
        ) : (
          <p className={styles.authorNameLetter}>T</p>
        )}
      </div>
      <p
        className={classNames(styles.messageText, {
          [styles.isBot]: isBot,
          [styles.loadingText]: loading,

        })}
      >
        {messageText}
      </p>
    </div>
  )
}
