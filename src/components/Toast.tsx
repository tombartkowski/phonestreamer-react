import { Alert, AlertIcon, chakra, AlertTitle, CloseButton } from '@chakra-ui/react';
import { FC } from 'react';

type ToastStatus = 'error' | 'info' | 'warning' | 'success';

type ToastProps = {
  id: string;
  message: string;
  status: ToastStatus;
  onClose: () => void;
};

export const Toast: FC<ToastProps> = ({ id, message, status, onClose }) => {
  return (
    <Alert
      id={id + ''}
      status={status}
      variant="solid"
      alignItems="start"
      borderRadius="md"
      boxShadow="lg"
      paddingEnd={8}
      textAlign="start"
      width="auto"
    >
      <AlertIcon />
      <chakra.div flex="1" maxWidth="100%">
        <AlertTitle fontWeight="semibold">{message}</AlertTitle>
      </chakra.div>
      <CloseButton size="sm" onClick={onClose} position="absolute" insetEnd={1} />
    </Alert>
  );
};
