import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import UsersList from './ui/UsersList';
import ChatComponent from './ui/ChatComponent';

export default function ChatPage({ messages: initMessages, user: loggedUser }) {
  const wsConnect = false;
  const isTyping = false;
  const users = [
    { id: 1, name: 'test' },
    { id: 2, name: 'test2' },
  ];
  const [messages, setMessages] = useState(initMessages);

  const sendMessageHandler = (newMessage) => {
    setMessages([...messages, { text: newMessage, User: { id: 1, name: 'test' } }]);
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center text-center">
        <Col xs={6}>
          <h1 className="p-2 display-3" style={{ color: wsConnect ? 'green' : 'red' }}>
            Chat
          </h1>
        </Col>
      </Row>
      <Card className="p-4">
        <Row>
          <Col xs={2}>
            <UsersList users={users} />
          </Col>
          <Col xs={10}>
            <ChatComponent
              sendMessageHandler={sendMessageHandler}
              messages={messages}
              loggedUser={loggedUser}
            />
            {isTyping && 'Some one is typing...'}
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
