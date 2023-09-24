import React, { useEffect, useRef } from 'react';
import { Stack } from 'react-bootstrap';
import ChatMessage from './ChatMessage';

export default function MessagesList({ messages, loggedUser }) {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div ref={chatContainerRef} className="overflow-y-scroll" style={{ height: '23rem' }}>
      <Stack>
        {messages.map((message) => (
          <ChatMessage message={message} key={message.id} loggedUser={loggedUser} />
        ))}
      </Stack>
    </div>
  );
}
