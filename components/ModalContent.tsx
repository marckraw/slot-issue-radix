import React, { FC, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styles from './modal.module.scss';

interface ModalContentProps {
  children: ReactNode;
}

/**
 *
 * Modal Content
 *
 */
const ModalContent: FC<ModalContentProps> = ({ children, ...rest }) => {
  return (
    <Dialog.Content className={styles.modalContent} {...rest}>
      {children}
      <Dialog.Close>Exit</Dialog.Close>
    </Dialog.Content>
  );
};

ModalContent.displayName = 'ModalContent';
export { ModalContent };
