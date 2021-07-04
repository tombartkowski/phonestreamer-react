import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import 'firebase/auth';
import { Card } from '../../components/Card';
import { DividerWithText } from '../../components/DividerWithText';
import { Link } from '../../components/Link';
import { Logo } from '../../components/Logo';
import { SignInForm } from './SignInForm';
import { useSignin } from '../hooks/useSignin';
import { Toast } from '../../../../components/Toast';

export const SignIn = () => {
  const toast = useToast();

  const handleSignInSuccess = () => {
    console.log('REDIRECT');
  };
  const onSignInCompleted = (data?: any, error?: Error) => {
    if (error) {
      toast({
        position: 'top',
        render: ({ id, onClose }) => {
          return (
            <Toast
              id={id + ''}
              message={error.message}
              status="error"
              onClose={onClose}
            />
          );
        },
      });
    } else if (data) {
      handleSignInSuccess();
    }
  };
  const [signup, isLoading] = useSignin('github', onSignInCompleted);

  return (
    <Center minW="100vw" bgGradient="linear(to-r, #2A4365, #086F83)" minH="100vh">
      <Box maxW="2xl" flex="1" mx="auto">
        <Card>
          <Box py="12">
            <Logo mx="auto" h="6" />
          </Box>
          <Heading textAlign="center" pb="8" fontSize="1.5rem" fontWeight="bold">
            Sign in to PhoneStreamer.
          </Heading>

          <Box maxW="60%" mx="auto">
            <Button
              isLoading={isLoading}
              onClick={signup}
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
            <DividerWithText mb={5}>or</DividerWithText>
            <SignInForm onSignInSuccess={handleSignInSuccess} />
            <Text mt="6" pb="16" align="center" fontWeight="medium">
              <Text textColor="gray.400" as="span">
                Don't have an account?
              </Text>
              <Link marginStart="1.5" href="/sign-up">
                Sign up.
              </Link>
            </Text>
          </Box>
        </Card>
      </Box>
    </Center>
  );
};
