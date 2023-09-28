import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

type FormCharProps = {
  submitHandler: (event: React.FormEvent<HTMLFormElement>, input: string) => Promise<void>;
};

export default function FormChar({ submitHandler }: FormCharProps): JSX.Element {
  const [input, setInput] = useState('');
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setInput(e.target.value);
  return (
    <Form onSubmit={(e) => void submitHandler(e, input)}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="1,2,5,13"
          aria-label="Characters' ids"
          aria-describedby="basic-addon2"
          onChange={changeHandler}
          value={input}
        />
        <InputGroup.Text id="basic-addon2">
          <Button type="submit">go</Button>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}
