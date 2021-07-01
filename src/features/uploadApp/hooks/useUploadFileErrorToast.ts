import { useToast } from '@chakra-ui/react';
import { FileRejection, DropEvent } from 'react-dropzone';
export const useUploadFileErrorToast = () => {
  const toast = useToast();
  const onDropRejected = (fileRejections: FileRejection[], event: DropEvent) => {
    if (event.type === 'change') {
      toast({
        title:
          fileRejections.length > 1
            ? 'Please pick only 1 zip file.'
            : 'Please pick a file with the zip format.',
        status: 'error',
        duration: 3600,
        position: 'top',
      });
    }
  };

  return onDropRejected;
};
