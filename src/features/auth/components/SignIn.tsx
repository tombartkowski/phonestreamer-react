import { Box, Heading } from '@chakra-ui/react';
import 'firebase/auth';
import { DividerWithText } from './DividerWithText';
import { Link } from './Link';
import { GithubButton } from './GithubButton';
import { BottomLink } from './BottomLink';
import { AuthContainer } from './AuthContainer';
import { useAuthResultHandler } from '../hooks/useAuthResultHandler';
import { useAuthAction } from '../hooks/useAuthAction';
import { FieldDescriptions, InitialValues, ValidationSchemas } from '../consts';
import { AuthForm } from './AuthForm';

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
        <AuthForm
          fields={FieldDescriptions.Signin}
          initialValues={InitialValues.Signin}
          validationSchema={ValidationSchemas.Signin}
          validateOnMount={true}
          authAction="signin"
          submitButtonText="Sign in"
          onSubmitSuccess={handleSignInSuccess}
        >
          <Link
            mt="-1"
            fontSize="0.92rem"
            fontWeight="medium"
            display="block"
            href="/reset-password"
          >
            I forgot my password.
          </Link>
        </AuthForm>
        <BottomLink
          questionText="Don't have an account?"
          linkText="Sign up."
          href="/sign-up"
        />
      </Box>
    </AuthContainer>
  );
};
