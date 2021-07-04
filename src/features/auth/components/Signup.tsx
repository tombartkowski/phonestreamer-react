import { Box, Heading, Text } from '@chakra-ui/react';
import 'firebase/auth';
import { DividerWithText } from './DividerWithText';
import { SignupForm } from './SignupForm';
import { useAuthAction } from '../hooks/useAuthAction';
import { AuthContainer } from './AuthContainer';
import { GithubButton } from './GithubButton';
import { BottomLink } from './BottomLink';
import { useAuthResultHandler } from '../hooks/useAuthResultHandler';

export const Signup = () => {
  const handleSignupSuccess = () => {
    console.log('REDIRECT');
  };

  const [signup, isLoading] = useAuthAction(
    'signup',
    'github',
    useAuthResultHandler(handleSignupSuccess)
  );
  return (
    <AuthContainer>
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
        <GithubButton isLoading={isLoading} onClick={signup} />
        <DividerWithText mb={5}>or use email</DividerWithText>
        <SignupForm onSignupSuccess={handleSignupSuccess} />
        <BottomLink
          questionText="Already have an account?"
          linkText="Sign in."
          href="/sign-in"
        />
      </Box>
    </AuthContainer>
  );
};