import React from 'react';
import { Col, Row } from 'react-bootstrap';
import type { CharType } from '../types/char';
import CharCard from './CharCard';

type CardsListsProps = {
  chars: CharType[];
  openModalHandler: (char: CharType) => void;
};

export default function CardsLists({ chars, openModalHandler }: CardsListsProps): JSX.Element {
  return (
    <Row>
      {chars.map((char) => (
        <Col xs={4} key={char.id}>
          <CharCard char={char} openModalHandler={openModalHandler}/>
        </Col>
      ))}
    </Row>
  );
}
