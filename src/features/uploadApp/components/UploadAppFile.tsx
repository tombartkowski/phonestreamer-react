import { Box } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import 'firebase/storage';
import { UploadFilePrompt } from './UploadFilePrompt';
import { UploadFiledDropPrompt } from './UploadFileDropPrompt';
import { useUploadFile } from '../hooks/useUploadFile';
import { useUploadProgressSocket } from '../hooks/useUploadProgressSocket';
import { App } from '../../../entities/app';
import { useHistory } from 'react-router-dom';
import { UploadFileProgress } from './UploadFileProgress';
import { UploadFileErrorAlert } from './UploadFileErrorAlert';
import { useUploadFileErrorToast } from '../hooks/useUploadFileErrorToast';

export const UploadAppFile = () => {
  const errorToast = useUploadFileErrorToast();
  const history = useHistory();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<Error | null>(null);
  const onUploadError = (error: Error) => {
    setUploadError(error);
    setIsUploading(false);
  };
  const onCompleted = (app: App) => {
    setTimeout(() => {
      history.push('/upload/summary/' + app.id);
    }, 300);
  };
  const [zipUploadProgress, uploadFile] = useUploadFile({
    onUploadError,
    onCompleted,
  });
  const [socketUploadProgress] = useUploadProgressSocket();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles[0]) {
        setIsUploading(true);
        setUploadError(null);
        uploadFile(acceptedFiles && acceptedFiles[0]);
      }
    },
    [uploadFile]
  );

  const {
    getRootProps,
    draggedFiles,
    getInputProps,
    open,
    isDragActive,
    isDragAccept,
  } = useDropzone({
    onDrop,
    onDropRejected: errorToast,
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    accept:
      'application/zip,application/x-zip,application/x-zip-compressed,application/octet-stream',
  });

  const currentProgress = Math.max(zipUploadProgress, socketUploadProgress);
  return (
    <Box>
      <Box
        {...getRootProps()}
        width={512}
        height={270}
        bg={isDragActive ? 'gray.700' : 'gray.750'}
        shadow={isDragActive ? '2xl' : 'base'}
        transition="all 0.16s ease-out"
        border="3px"
        borderColor="gray.600"
        borderStyle="dashed"
        rounded="3xl"
        mb={8}
      >
        {isUploading || (
          <>
            {isDragActive && (
              <UploadFiledDropPrompt
                isSingleFile={draggedFiles.length === 1}
                isCorrectFormat={isDragAccept}
              />
            )}
          </>
        )}
        {isUploading || (
          <>{!isDragActive && <UploadFilePrompt browseFilesClicked={open} />}</>
        )}
        <input {...getInputProps()} />
        {isUploading && <UploadFileProgress progress={currentProgress} />}
      </Box>
      <UploadFileErrorAlert
        closeHandler={setUploadError}
        errorMessage={uploadError !== null ? uploadError.message : null}
      />
    </Box>
  );
};
