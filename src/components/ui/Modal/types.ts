import React from 'react';

export type ModalProps = {
  type: 'conditions' | 'success' | 'error';
  onClose: () => void;
  children?: React.ReactNode;
};
