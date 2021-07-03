import { Box, Button, Center, Heading, Text, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { Card } from './Card';
import { DividerWithText } from './DividerWithText';
import { Link } from './Link';
import { SignupForm } from './SignupForm';
import { Logo } from './Logo';

export const Signup = () => (
  <Center minW="100vw" bgGradient="linear(to-r, #2A4365, #086F83)" minH="100vh">
    <Box maxW="2xl" flex="1" mx="auto">
      <Card>
        <Box py="12">
          <Logo mx="auto" h="6" />
        </Box>
        <Heading textAlign="center" pb="8" fontSize="2xl" fontWeight="bold">
          Sign up to PhoneStreamer.
        </Heading>

        <Box maxW="60%" mx="auto">
          <Button
            bg="black"
            _hover={{ bg: '#141414' }}
            _active={{ bg: '#1f1f1f' }}
            shadow="lg"
            isFullWidth
            mb={5}
            fontSize="md"
            size="lg"
            leftIcon={<Icon as={FaGithub} />}
            color="currentColor"
          >
            Continue with Github
          </Button>
          <DividerWithText mb={5}>or use email</DividerWithText>
          <SignupForm />
          <Text mt="6" pb="16" align="center" fontWeight="medium">
            <Text textColor="gray.400" as="span">
              Already have an account?
            </Text>
            <Link marginStart="1.5" href="#">
              Sign in.
            </Link>
          </Text>
        </Box>
      </Card>
    </Box>
  </Center>
);
