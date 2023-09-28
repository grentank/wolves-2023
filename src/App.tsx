import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import FormChar from './components/FormChar';
import CardsLists from './components/CardsLists';
import CharModal from './components/CharModal';
import type { APICharType, APIResponseType, CharType } from './types/char';

function App(): JSX.Element {
  const [chars, setChars] = useState<CharType[]>([]);

  const [modalContent, setModalContent] = useState<null | CharType>(null);

  const openModalHandler = (char: CharType): void => setModalContent(char);

  useEffect(() => {
    axios
      .get<APIResponseType>('https://rickandmortyapi.com/api/character')
      .then((res) => {
        const appChars = res.data.results.map((char) => ({
          ...char,
          isAlive: char.status === 'Alive',
        }));
        setChars(appChars);
      })
      .catch(console.log);
  }, []);

  const submitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
    input: string,
  ): Promise<void> => {
    event.preventDefault();
    if (!input.includes(',')) return;
    const res = await axios.get<APICharType[]>(
      `https://rickandmortyapi.com/api/character/${input}`,
    );

    const appChars = res.data.map((char) => ({
      ...char,
      isAlive: char.status === 'Alive',
    }));
    setChars(appChars);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6}>
          <FormChar submitHandler={submitHandler} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={8}>
          <CardsLists chars={chars} openModalHandler={openModalHandler} />
        </Col>
      </Row>
      <CharModal
        modalContent={modalContent}
        show={!!modalContent}
        handleClose={() => setModalContent(null)}
      />
    </Container>
  );
}

export default App;
