import { Center, Spinner } from '@chakra-ui/react';

export const LoadingScreen = () => {
  return (
    <Center minW="100wv" minH="100vh">
      <Spinner
        speed="0.65s"
        thickness="4px"
        emptyColor="gray.700"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
};
