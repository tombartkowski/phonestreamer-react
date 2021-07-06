import { Flex, Heading, Spacer } from '@chakra-ui/react';
import { FC } from 'react';

type SectionHeaderType = 'muted' | 'main';

type SectionHeaderProps = {
  title: string;
  type?: SectionHeaderType;
};

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  type = 'main',
  children,
}) => {
  return (
    <Flex align="center" mb="3">
      <Heading
        fontSize={type == 'main' ? '1.7rem' : '1.3rem'}
        fontWeight={type == 'main' ? 'bold' : 'semibold'}
        textColor={type == 'main' ? 'white' : 'gray.400'}
        mb="0.5"
      >
        {title}
      </Heading>
      <Spacer />
      {children}
    </Flex>
  );
};
