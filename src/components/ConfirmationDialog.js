import React, { useRef, useState } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Checkbox,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { toggleDialogPreferences } from 'actions';

const ConfirmationDialog = ({
  isOpen,
  setIsOpen,
  onConfirm,
  title,
  body,
  confirmButtonLabel,
}) => {
  const cancelRef = useRef();
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);
  const onClose = () => setIsOpen(false);

  const handleConfirm = () => {
    onClose();
    onConfirm();
    isChecked && dispatch(toggleDialogPreferences());
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
            <Checkbox
              mt={4}
              isChecked={isChecked}
              onChange={e => setIsChecked(e.target.checked)}
            >
              Don't ask next time
            </Checkbox>
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
