import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../app/api'
import { TMessage } from '../../app/types'
import { unit8ToArray } from '../../utils/unit8ToObject'

export const useSendMessage = (
  messagesContainerRef: React.MutableRefObject<HTMLDivElement | null>
) => {
  const [messagesList, setMessagesList] = useState<TMessage[]>([])
  const [loading, setLoading] = useState(false)

  const onMessageSend = async (message: string) => {
    if (!message) {
      return alert('Заполните поле ввода')
    }
    setLoading(true)
    setMessagesList((prev) => [...prev, { isBot: false, messageText: message }])

    const { data } = await axiosInstance.post<string>('/chat/send-message', {
      message
    })
    const messageText = unit8ToArray(data)
    setMessagesList((prev) => [...prev, { isBot: true, messageText }])
    setLoading(false)
  }

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight
    }
  }, [messagesContainerRef, messagesList])

  return { messagesList, onMessageSend, loading }
}
