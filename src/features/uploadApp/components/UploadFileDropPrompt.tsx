import { Text, Code, Flex, Icon, Fade } from '@chakra-ui/react';
import { FC } from 'react';
import { RiFolderDownloadFill, RiFolderForbidFill } from 'react-icons/ri';

type UploadFiledDropPromptProps = {
  isCorrectFormat: boolean;
  isSingleFile: boolean;
};

export const UploadFiledDropPrompt: FC<UploadFiledDropPromptProps> = ({
  isCorrectFormat,
  isSingleFile,
}) => {
  let message = <>Drop here to start the upload.</>;
  if (!isCorrectFormat && !isSingleFile) {
    message = (
      <>
        Please pick only 1 file with <Code>.zip</Code> extension.
      </>
    );
  } else if (!isCorrectFormat) {
    message = (
      <>
        Please pick a file with <Code>.zip</Code> extension.
      </>
    );
  }

  return (
    <Fade
      transition={{ enter: { duration: 0.16, easings: ['easeOut'] } }}
      style={{ height: '100%' }}
      in={true}
    >
      <Flex
        justify="center"
        textColor={isCorrectFormat ? 'green.300' : 'red.300'}
        direction="column"
        align="center"
        h="full"
      >
        <Icon
          mb={1.5}
          as={isCorrectFormat ? RiFolderDownloadFill : RiFolderForbidFill}
          width="64px"
          height="64px"
        />
        <Text fontSize="xl" fontWeight="medium">
          {message}
        </Text>
      </Flex>
    </Fade>
  );
};
