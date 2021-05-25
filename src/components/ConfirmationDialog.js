import React, { useRef } from 'react';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

const ConfirmationDialog = ({
  isOpen,
  setIsOpen,
  onConfirm,
  title,
  body,
  confirmButtonLabel,
}) => {
  const cancelRef = useRef();
  const onClose = () => setIsOpen(false);

  const handleConfirm = () => {
    onClose();
    onConfirm();
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title || 'Confirm action'}
          </AlertDialogHeader>

          <AlertDialogBody>
            {body || "Are you sure? You can't undo this action afterwards."}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleConfirm} ml={3}>
              {confirmButtonLabel || 'Confirm'}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ConfirmationDialog;
