// ModalComponent.jsx

import React from 'react';
import Modal from 'react-modal';

function ModalComponent({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h2>Три вопроса</h2>
      <p>Вопрос 1: ...</p>
      <p>Вопрос 2: ...</p>
      <p>Вопрос 3: ...</p>
      <button onClick={closeModal}>Закрыть</button>
    </Modal>
  );
};

export default ModalComponent;
