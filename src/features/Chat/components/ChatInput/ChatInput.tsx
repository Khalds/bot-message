import styles from './ChatInput.module.scss'
import SendIcon from '../../../../assets/send-icon.svg'
import { FC, useEffect, useRef, useState } from 'react'

type TProps = {
  onMessageSend: (message: string) => Promise<void>
  loading: boolean
}

export const ChatInput: FC<TProps> = ({ onMessageSend, loading }) => {
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmitClick = () => {
    onMessageSend(message)
    setMessage('')
  }

  return (
    <div className={styles.inputWrapper}>
      <input
        ref={inputRef}
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        placeholder="Start typing here..."
        type="text"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmitClick()
          }
        }}
        className={styles.input}
      />
      <div className={styles.buttonWrapper}>
        <button
          disabled={loading}
          onClick={handleSubmitClick}
          className={styles.inputBtn}
        >
          <img src={SendIcon} className={styles.sendIcon} alt="" />
        </button>
      </div>
    </div>
  )
}
