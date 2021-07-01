import { Text, Button, Box, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Box>
      <Center textAlign="center">
        <Box maxW={420} bg="gray.750" p={8} rounded="3xl" boxShadow="lg">
          <Text fontWeight="semibold" fontSize="2xl">
            Get Started with PhoneStreamer
          </Text>
          <Text mt={2} fontWeight="medium" textColor="gray.400" fontSize="md">
            Use the <i>Upload Wizard</i> to upload your app in a few simple steps.
          </Text>
          <Link to="/upload">
            <Button size="md" w={180} mt={5} colorScheme="teal">
              Get Started
            </Button>
          </Link>
        </Box>
      </Center>
    </Box>
  );
};
