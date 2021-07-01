import { VStack, Text, Box, Button, Icon, Stack } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const IOSBuildQuestion = () => (
  <Box>
    <VStack align="left" spacing={6}>
      <Text fontSize={18} fontWeight="medium" width="70%" textColor="gray.400">
        If a developer was kind enough to give you a simulator build then go straight to uploading.
      </Text>

      <Text fontSize={18} fontWeight="medium" width="70%" textColor="gray.400">
        If you are starting from scratch then jump in and prepare the build in a few easy steps.
      </Text>

      <Stack pt={6} spacing={3} direction="row" align="center">
        <Link to="/upload/ios/instructions">
          <Button as="a" size="lg">
            Building Instructions
          </Button>
        </Link>
        <Link to="/upload/file">
          <Button as="a" size="lg" rightIcon={<Icon as={FaArrowRight} />} colorScheme="teal">
            I got the Build
          </Button>
        </Link>
      </Stack>
    </VStack>
  </Box>
);
