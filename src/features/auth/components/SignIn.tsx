import { Box, Heading } from '@chakra-ui/react';
import 'firebase/auth';
import { DividerWithText } from './DividerWithText';
import { SignInForm } from './SignInForm';
import { GithubButton } from './GithubButton';
import { BottomLink } from './BottomLink';
import { AuthContainer } from './AuthContainer';
import { useAuthResultHandler } from '../hooks/useAuthResultHandler';
import { useAuthAction } from '../hooks/useAuthAction';

export const SignIn = () => {
  const handleSignInSuccess = () => {
    console.log('REDIRECT');
  };

  const [signin, isLoading] = useAuthAction(
    'signin',
    'github',
    useAuthResultHandler(handleSignInSuccess)
  );
  return (
    <AuthContainer>
      <Heading textAlign="center" pb="8" fontSize="1.5rem" fontWeight="bold">
        Sign in to PhoneStreamer.
      </Heading>
      <Box maxW="60%" mx="auto">
        <GithubButton isLoading={isLoading} onClick={signin} />
        <DividerWithText mb={5}>or</DividerWithText>
        <SignInForm onSignInSuccess={handleSignInSuccess} />
        <BottomLink
          questionText="Don't have an account?"
          linkText="Sign up."
          href="/sign-up"
        />
      </Box>
    </AuthContainer>
  );
};
