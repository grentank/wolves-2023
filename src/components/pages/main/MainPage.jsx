import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function MainPage() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center text-center">
        <Col xs="8">
          <h1 className="display-5 p-2">Today you will become masters of Websockets</h1>
          <img src="/300.gif" alt="joke" />
        </Col>
      </Row>
    </Container>
  );
}
