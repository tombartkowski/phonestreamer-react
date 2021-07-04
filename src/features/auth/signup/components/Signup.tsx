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
import { DividerWithText } from './../../components/DividerWithText';
import { Link } from './../../components/Link';
import { Logo } from './../../components/Logo';
import { SignupForm } from './SignupForm';
import { useSignup } from '../hooks/useSignup';
import { Toast } from '../../../../components/Toast';

export const Signup = () => {
  const toast = useToast();

  const handleSignupSuccess = () => {
    console.log('REDIRECT');
  };
  const onSignupCompleted = (data?: any, error?: Error) => {
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
      handleSignupSuccess();
    }
  };
  const [signup, isLoading] = useSignup('github', onSignupCompleted);

  return (
    <Center minW="100vw" bgGradient="linear(to-r, #2A4365, #086F83)" minH="100vh">
      <Box maxW="2xl" flex="1" mx="auto">
        <Card>
          <Box py="12">
            <Logo mx="auto" h="6" />
          </Box>
          <Heading textAlign="center" pb="2.5" fontSize="1.77rem" fontWeight="bold">
            Share &amp; test apps with ease.
          </Heading>
          <Text
            fontWeight="medium"
            pb="6"
            fontSize="0.95rem"
            textColor="gray.433"
            lineHeight="1.5rem"
            textAlign="center"
          >
            Share your mobile apps with QA or other developers. <br /> Easly test new
            builds on our blazing fast simulators.
          </Text>
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
            <DividerWithText mb={5}>or use email</DividerWithText>
            <SignupForm onSignupSuccess={handleSignupSuccess} />
            <Text mt="6" pb="16" align="center" fontWeight="medium">
              <Text textColor="gray.400" as="span">
                Already have an account?
              </Text>

              <Link marginStart="1.5" href="/sign-in">
                Sign in.
              </Link>
            </Text>
          </Box>
        </Card>
      </Box>
    </Center>
  );
};
