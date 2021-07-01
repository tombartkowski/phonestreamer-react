import { Flex, Code, Tooltip, Button, useClipboard } from '@chakra-ui/react';
import { FC } from 'react';

type InstructionCodeToCopyProps = {
  code: string;
};

export const InstructionCodeToCopy: FC<InstructionCodeToCopyProps> = ({ code }) => {
  const { hasCopied, onCopy } = useClipboard(code, 800);

  return (
    <Flex mb={2}>
      <Code
        colorScheme="blue"
        flexGrow={1}
        display="flex"
        px={4}
        justifyContent="left"
        alignItems="center"
        rounded="lg"
      >
        {code}
      </Code>
      <Tooltip fontSize="md" label="Copied!" placement="top" isOpen={hasCopied}>
        <Button onClick={onCopy} size="lg" ml={2}>
          Copy
        </Button>
      </Tooltip>
    </Flex>
  );
};
