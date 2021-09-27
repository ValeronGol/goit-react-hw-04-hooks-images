import React, { useEffect } from 'react';
import { Overlay, ContainerModal } from './Modal.styled';

export default function Modal(props) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      props.showModal();
    }
  };

  const hideModal = e => {
    if (e.currentTarget === e.target) {
      props.showModal();
    }
  };
  return (
    <Overlay onClick={hideModal}>
      <ContainerModal>
        <img src={props.props} alt="photoInModal" />
      </ContainerModal>
    </Overlay>
  );
}
