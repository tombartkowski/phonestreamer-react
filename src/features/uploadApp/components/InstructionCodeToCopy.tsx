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
        flexGrow={0}
        display="flex"
        noOfLines={{ xs: 1 }}
        pl={4}
        pr={8}
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
