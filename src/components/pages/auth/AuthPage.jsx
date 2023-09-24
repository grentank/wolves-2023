import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
import ErrorModal from './ui/ErrorModal';
import useModal from './hooks/useModal';

export default function AuthPage() {
  const [loading, setLoading] = useState(false);
  const { show, handleClose, content, showModal } = useModal();

  const submitHandler = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      const response = await axios.post(
        '/api/auth/signin',
        Object.fromEntries(new FormData(event.target)),
      );
      if (response.status === 200) {
        window.location.href = '/chat';
      }
    } catch (error) {
      showModal('Error', error.response.data.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center text-center">
        <Col xs="8">
          <h1 className="display-5 p-2">Auth Page</h1>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center text-center">
        <Col xs="7">
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="1@1" name="email" id="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="1" name="password" id="password" />
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center text-center">
        <Col xs="4">
          <Spinner animation="border" size="lg" hidden={!loading} />
        </Col>
      </Row>
      <ErrorModal content={content} show={show} handleClose={handleClose} />
    </Container>
  );
}
