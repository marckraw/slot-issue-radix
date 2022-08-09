import React, { FC, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {ModalContent} from "./ModalContent";

interface ModalTriggerProps {
  children: ReactNode;
}

const ModalTrigger: FC<ModalTriggerProps> = ({ children, ...rest }) => {
  return <Dialog.Trigger {...rest}>{children}</Dialog.Trigger>;
};

ModalTrigger.displayName = 'ModalTrigger';
export { ModalTrigger };
