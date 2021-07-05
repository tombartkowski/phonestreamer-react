import { Box, Collapse, Heading, Text } from '@chakra-ui/react';
import 'firebase/auth';
import { Link } from './Link';
import { ResetPasswordBanner } from './ResetPasswordBanner';
import { useState } from 'react';
import { AuthContainer } from './AuthContainer';
import { FieldDescriptions, InitialValues, ValidationSchemas } from '../consts';
import { AuthForm } from './AuthForm';

export const ResetPassword = () => {
  const [isBanerOpen, setIsBanerOpen] = useState(false);
  const [recipentEmail, setRecipentEmail] = useState('');

  const handleResetPasswordSuccess = (email: string) => {
    setIsBanerOpen(true);
    setRecipentEmail(email);
  };

  return (
    <AuthContainer
      topComponent={
        <Collapse startingHeight={0} in={isBanerOpen}>
          <ResetPasswordBanner email={recipentEmail} />
        </Collapse>
      }
    >
      <Box maxW="60%" mx="auto">
        <Heading textAlign="left" pb="3" fontSize="1.5rem" fontWeight="bold">
          Reset your password.
        </Heading>
        <Text pb="6" fontSize="0.93rem" textColor="gray.400" fontWeight="medium">
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password. <br />
          <br /> For security reasons, we do NOT store your password. So rest assured
          that we will never send your password via email.
        </Text>
        {/* <ResetPasswordForm onResetPasswordSuccess={handleResetPasswordSuccess} /> */}
        <AuthForm
          fields={FieldDescriptions.ResetPassword}
          initialValues={InitialValues.ResetPassword}
          validationSchema={ValidationSchemas.ResetPassword}
          authAction="reset-password"
          submitButtonText="Send reset instructions"
          onSubmitSuccess={handleResetPasswordSuccess}
        ></AuthForm>
        <Text mt="6" pb="16" align="center" fontWeight="medium">
          <Link marginStart="1.5" href="/sign-in">
            Back to Sign in.
          </Link>
        </Text>
      </Box>
    </AuthContainer>
  );
};
