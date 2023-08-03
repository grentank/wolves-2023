import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import SendIcon from '../../../ui/icons/SendIcon';
import {
  STOP_TYPING_MESSAGE_FROM_CLIENT,
  TYPING_MESSAGE_FROM_CLIENT,
} from '../../../../ws/actions';

export default function MessageForm({ handlerSubmit, socketRef }) {
  const [input, setInput] = useState('');
  const changeHandler = (e) => setInput(e.target.value);

  useEffect(() => {
    if (!socketRef.current) return;
    const socket = socketRef.current;
    socket.send(JSON.stringify({ type: TYPING_MESSAGE_FROM_CLIENT }));

    setTimeout(() => {
      socket.send(JSON.stringify({ type: STOP_TYPING_MESSAGE_FROM_CLIENT }));
    }, 5000);
  }, [input]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        handlerSubmit(input);
        setInput('');
      }}
    >
      <InputGroup className="mb-3">
        <Form.Control placeholder="Your message" value={input} onChange={changeHandler} />
        <InputGroup.Text id="basic-addon2">
          <Button variant="outline-primary" type="submit">
            <SendIcon />
          </Button>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}
