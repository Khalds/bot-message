import { useRef } from 'react'
import styles from './Chat.module.scss'
import { ChatInput, Message } from './components'
import { useSendMessage } from './useSendMessage'

export const Chat = () => {
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)
  const { onMessageSend, messagesList, loading } =
    useSendMessage(messagesContainerRef)

  return (
    <div className={styles.root}>
      <div ref={messagesContainerRef} className={styles.messagesList}>
        {messagesList.map((message, idx) => (
          <Message key={idx} {...message} />
        ))}

        {loading && <Message loading messageText="Typing..." isBot />}
      </div>
      <ChatInput loading={loading} onMessageSend={onMessageSend} />
    </div>
  )
}
