import { Divider, Heading } from '@chakra-ui/react';
import { FC } from 'react';

type InstructionCodeToCopyProps = {
  title: string;
};

export const InstructionSectionHeader: FC<InstructionCodeToCopyProps> = ({ title }) => {
  return (
    <Heading fontSize={27}>
      {title}
      <Divider mt={2} />
    </Heading>
  );
};
