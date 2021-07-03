import { Box, BoxProps } from '@chakra-ui/react';

export const Card = (props: BoxProps) => (
  <Box bg="gray.800" shadow="2xl" rounded={{ sm: '3xl' }} {...props} />
);
