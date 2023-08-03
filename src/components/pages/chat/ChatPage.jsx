import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import UsersList from './ui/UsersList';
import ChatComponent from './ui/ChatComponent';
import {
  SET_USERS_FROM_SERVER,
  ADD_MESSAGE_FROM_SERVER,
  ADD_MESSAGE_FROM_CLIENT,
  TYPING_MESSAGE_FROM_SERVER,
  STOP_TYPING_MESSAGE_FROM_SERVER,
} from '../../../ws/actions';

export default function ChatPage({ messages: initMessages, user: loggedUser }) {
  const [messages, setMessages] = useState(initMessages);
  const [users, setUsers] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [wsConnect, setWsConnect] = useState(false)
  const socketRef = useRef(null);

  useEffect(() => {
    const socketConnect = () => {
      socketRef.current = new WebSocket('ws://localhost:3000');
      const socket = socketRef.current;
  
      socket.onmessage = (event) => {
        const { type, payload } = JSON.parse(event.data);
        switch (type) {
          case SET_USERS_FROM_SERVER:
            setUsers(payload);
            break;
          case ADD_MESSAGE_FROM_SERVER:
            setMessages((prev) => [...prev, payload]);
            break;
          case TYPING_MESSAGE_FROM_SERVER:
            setIsTyping(true);
            break;
            case STOP_TYPING_MESSAGE_FROM_SERVER:
              setIsTyping(false);
              break;
          default:
            break;
        }
      };
  
      socket.onopen = () => {
        setWsConnect(true)
      }
  
      socket.onclose = () => {
        setWsConnect(false)
        setTimeout(() => {
          socketConnect()
        }, 2000)
      }
    }
    socketConnect()

  }, []);

  const handlerSubmitMessage = (input) => {
    const socket = socketRef.current;
    socket.send(JSON.stringify({ type: ADD_MESSAGE_FROM_CLIENT, payload: input }));
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center text-center">
        <Col xs={6}>
          <h1 className="p-2 display-3" style={{color: wsConnect? "green": "red"}}>Chat</h1>
        </Col>
      </Row>
      <Card className="p-4">
        <Row>
          <Col xs={2}>
            <UsersList users={users} />
          </Col>
          <Col xs={10}>
            <ChatComponent
              handlerSubmit={handlerSubmitMessage}
              messages={messages}
              loggedUser={loggedUser}
              socketRef={socketRef}
            />
            {isTyping && "Some one is typing..."}
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
