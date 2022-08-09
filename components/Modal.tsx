import React, { FC, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styles from './modal.module.scss';

interface ModalProps {
  children: ReactNode;
}

/**
 *
 * Modal component
 *
 */
const Modal: FC<ModalProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  console.log(childrenArray);
  const toSlots = childrenArray.reduce((prev: any, next: any) => {
    return {
      ...prev,
      [next.type.displayName]: next,
    };
  }, {});

  console.log(toSlots);
  return (
    <Dialog.Root>
      {toSlots.ModalTrigger}
      <Dialog.Portal>
        <Dialog.Overlay className={styles.modalOverlay} />
        {toSlots.ModalContent}
      </Dialog.Portal>
    </Dialog.Root>
  );
};

Modal.displayName = 'Modal';
export { Modal };
