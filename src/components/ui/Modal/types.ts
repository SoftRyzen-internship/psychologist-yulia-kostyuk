import React from 'react';

export type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
};
