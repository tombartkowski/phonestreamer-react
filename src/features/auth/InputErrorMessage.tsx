import { Box, FormErrorMessage } from '@chakra-ui/react';
import { FC } from 'react';

type InputErrorMessageProps = {
  visible: boolean;
  message: string;
};

export const InputErrorMessage: FC<InputErrorMessageProps> = ({
  visible,
  message,
}) => {
  return (
    <Box h={visible ? 8 : 4} transition="height 0.2s ease-out">
      {visible && <FormErrorMessage display="inline">{message}</FormErrorMessage>}
    </Box>
  );
};
