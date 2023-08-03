import React from 'react';
import { Stack } from 'react-bootstrap';
import MessageForm from './MessageForm';
import MessagesList from './MessagesList';

export default function ChatComponent({ socketRef, handlerSubmit, messages, loggedUser }) {
  return (
    <Stack>
      <MessagesList messages={messages} loggedUser={loggedUser} />
      <MessageForm handlerSubmit={handlerSubmit} socketRef={socketRef}/>
    </Stack>
  );
}
