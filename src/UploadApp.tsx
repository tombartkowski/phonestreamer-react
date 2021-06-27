import { Box, VStack, Heading, HStack, Container } from '@chakra-ui/react';
import { PlatformOption, PlatformType } from './PlatformOption';

export const UploadApp = () => {
  return (
    <Box text textColor="gray.200" pt={10}>
      <Container maxW="container.md">
        <VStack spacing={6} align="left">
          <Heading textAlign="left">Where do you want to test your app?</Heading>
          <HStack spacing={8}>
            <PlatformOption platformType={PlatformType.IOS} />
            <PlatformOption platformType={PlatformType.ANDROID} />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
