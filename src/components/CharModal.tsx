import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import type { CharType } from '../types/char';

type CharModalProps = {
  show: boolean;
  handleClose: () => void;
  modalContent: CharType | null;
};

export default function CharModal({
  show,
  handleClose,
  modalContent,
}: CharModalProps): JSX.Element {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalContent?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Alive: {modalContent?.isAlive ? 'alive' : 'dead or unknown'}, Gender: {modalContent?.gender}
        ,<a href={modalContent?.url}>more</a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
