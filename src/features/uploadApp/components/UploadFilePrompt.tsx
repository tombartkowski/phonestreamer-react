import { Text, Box, Button, Code, Flex, Icon, Fade } from '@chakra-ui/react';
import { FC, MouseEventHandler } from 'react';
import { RiFolderZipFill } from 'react-icons/ri';

type UploadFilePromptProps = {
  browseFilesClicked: MouseEventHandler<HTMLButtonElement>;
};

export const UploadFilePrompt: FC<UploadFilePromptProps> = ({ browseFilesClicked }) => {
  return (
    <Fade
      transition={{ enter: { duration: 0.16, easings: ['easeOut'] } }}
      style={{ height: '100%' }}
      unmountOnExit
      in={true}
    >
      <Flex justify="center" textColor="gray.400" direction="column" align="center" h="full">
        <Icon mb={1.5} as={RiFolderZipFill} width="64px" height="64px" />
        <Text fontSize="xl" fontWeight="medium">
          Drag and drop your <Code>.zip</Code> file here.
        </Text>
        <Flex align="center" width="55%" py={4}>
          <Box flex={1} height="1px" bg="gray.600"></Box>
          <Text textColor="gray.500" px={3}>
            or
          </Text>
          <Box flex={1} height="1px" bg="gray.600"></Box>
        </Flex>
        <Button onClick={browseFilesClicked} colorScheme="teal" variant="outline">
          Browse Files
        </Button>
      </Flex>
    </Fade>
  );
};
