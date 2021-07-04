import { useToast } from '@chakra-ui/react';
import { Toast } from '../../../components/Toast';

export const useAuthResultHandler = (callback: (data?: any) => void) => {
  const toast = useToast();
  const onSignupCompleted = (data?: any, error?: Error) => {
    if (error) {
      toast({
        position: 'top',
        render: ({ id, onClose }) => {
          return (
            <Toast
              id={id + ''}
              message={error.message}
              status="error"
              onClose={onClose}
            />
          );
        },
      });
    } else if (data) {
      callback();
    }
  };
  return onSignupCompleted;
};
