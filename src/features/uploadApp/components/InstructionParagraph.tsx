import { Text } from '@chakra-ui/react';
import { FC } from 'react';

export const InstructionParagraph: FC = ({ children }) => {
  return (
    <Text pt={8} pb={4} fontSize="lg">
      {children}
    </Text>
  );
};
