import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import UsersList from './ui/UsersList';
import ChatComponent from './ui/ChatComponent';
import {
  ADD_MESSAGE,
  NEW_MESSAGE,
  SET_USERS,
  SET_WRITER,
  STARTED_TYPING,
  STOPPED_TYPING,
} from './utils/wsActionTypes';

export default function ChatPage({ messages: initMessages, user: loggedUser }) {
  const socketRef = useRef(null); // {current: null}
  const [wsConnect, setWsConnect] = useState(false);
  const [writer, setWriter] = useState(null); // null | User['name']
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState(initMessages);

  const sendMessageHandler = (newMessage) => {
    const action = { type: NEW_MESSAGE, payload: newMessage };
    if (socketRef.current) socketRef.current.send(JSON.stringify(action));
  };

  const typingHandler = (isTyping) => {
    if (isTyping && socketRef.current)
      socketRef.current.send(JSON.stringify({ type: STARTED_TYPING }));
    else if (!isTyping && socketRef.current)
      socketRef.current.send(JSON.stringify({ type: STOPPED_TYPING }));
  };

  useEffect(() => {
    function socketConnect() {
      socketRef.current = new WebSocket('ws://localhost:3000');
      const socket = socketRef.current;
      socket.onopen = () => setWsConnect(true);
      socket.onclose = () => {
        setWsConnect(false);
        setTimeout(socketConnect, 3000);
      };
      socket.onerror = console.error;
      socket.onmessage = (message) => {
        const actionFromBackend = JSON.parse(message.data);
        const { type, payload } = actionFromBackend;
        switch (type) {
          case ADD_MESSAGE:
            setMessages((prev) => [...prev, payload]);
            break;
          case SET_USERS:
            setUsers(payload);
            break;
          case SET_WRITER:
            setWriter(payload);
            break;

          default:
            break;
        }
      };
    }

    socketConnect();
  }, []);

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
              typingHandler={typingHandler}
            />
            {writer && `${writer} is typing...`}
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
