import React from 'react';
import { Stack } from 'react-bootstrap';
import MessageForm from './MessageForm';
import MessagesList from './MessagesList';

export default function ChatComponent({ messages, loggedUser, sendMessageHandler, typingHandler }) {
  return (
    <Stack>
      <MessagesList messages={messages} loggedUser={loggedUser} />
      <MessageForm sendMessageHandler={sendMessageHandler} typingHandler={typingHandler} />
    </Stack>
  );
}
