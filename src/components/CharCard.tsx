import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type { CharType } from '../types/char';

type CharCardProps = {
  char: CharType;
  openModalHandler: (char: CharType) => void;
};

export default function CharCard({ char, openModalHandler }: CharCardProps): JSX.Element {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={char.image} />
      <Card.Body>
        <Card.Title>{char.name}</Card.Title>
        <Card.Text>{char.origin.name}</Card.Text>
        <Button variant="primary" onClick={() => openModalHandler(char)}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}
