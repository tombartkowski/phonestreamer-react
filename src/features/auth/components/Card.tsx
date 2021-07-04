import { Box, BoxProps, Center } from '@chakra-ui/react';

export const Card = (props: BoxProps) => (
  <Center flex="1">
    <Box
      w="2xl"
      mx="auto"
      bg="gray.800"
      shadow="2xl"
      rounded={{ sm: '3xl' }}
      {...props}
    />
  </Center>
);
