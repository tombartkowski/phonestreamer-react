import { Text, Center, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import React, { FC } from 'react';

type UploadFileProgressProps = {
  progress: number;
};

export const UploadFileProgress: FC<UploadFileProgressProps> = ({ progress }) => {
  return (
    <Center flexDirection="column" height="full">
      <CircularProgress
        size="100px"
        value={progress}
        fontWeight="medium"
        trackColor="gray.300"
        color="blue.400"
      >
        <CircularProgressLabel>{`${progress}%`}</CircularProgressLabel>
      </CircularProgress>
      <Text text fontWeight="medium" pl={2} pt={1} textColor="gray.400">
        Uploading your <i>Magnum Opus</i>...
      </Text>
    </Center>
  );
};
