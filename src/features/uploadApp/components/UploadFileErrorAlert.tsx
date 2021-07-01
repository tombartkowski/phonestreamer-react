import {
  ScaleFade,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';
import { FC } from 'react';

type UploadFileErrorAlertProps = {
  errorMessage: string | null;
  closeHandler: (nothing: null) => void;
};

export const UploadFileErrorAlert: FC<UploadFileErrorAlertProps> = ({
  errorMessage,
  closeHandler,
}) => {
  return (
    <ScaleFade initialScale={0.9} in={!!errorMessage}>
      <Alert rounded="lg" status="error">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Looks like we got an error.</AlertTitle>
          <AlertDescription display="block">{errorMessage}</AlertDescription>
        </Box>
        <CloseButton onClick={() => closeHandler(null)} />
      </Alert>
    </ScaleFade>
  );
};
