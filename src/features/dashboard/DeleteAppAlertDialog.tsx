import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useRef } from 'react';

type DeleteAppAlertDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const DeleteAppAlertDialog: FC<DeleteAppAlertDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  return (
    <AlertDialog
      motionPreset="scale"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent bg="gray.750">
        <AlertDialogHeader>Delete app?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Are you sure you want to delete this app? This action is irreversible.
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="red"
            bg="red.500"
            textColor="white"
            _hover={{ bg: 'red.600' }}
            _active={{ bg: 'red.700' }}
            ml={3}
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
