import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import SendIcon from '../../../ui/icons/SendIcon';

export default function MessageForm({ sendMessageHandler }) {
  const [input, setInput] = useState('');
  const changeHandler = (e) => setInput(e.target.value);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        sendMessageHandler(input);
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
