import { useFormik, FormikProvider, Form } from 'formik';
import { PasswordField } from '../auth/components/PasswordField';
import { SubmitButton } from '../auth/components/SubmitButton';
import * as Yup from 'yup';
import { useState } from 'react';
import { Alert, AlertIcon } from '@chakra-ui/alert';
import { Box, CloseButton, Spacer } from '@chakra-ui/react';
import { useChangePassword } from './useChangePassword';

export const ChangePassword = () => {
  const [alerVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [isAlertSuccess, setIsAlertSuccess] = useState(true);

  const ChangePasswordSchema = Yup.object({
    oldPasword: Yup.string(),
    newPassword: Yup.string()
      .min(6, 'Try to make the password at least 6 characters long.')
      .required("Please don't leave the password empty."),
    repeatedNewPassword: Yup.string()
      .required(' ')
      .oneOf(
        [Yup.ref('newPassword')],
        "It is not a match. Please make sure there aren't any typos."
      ),
  });

  const handlePasswordChangeResult = (
    success: boolean,
    errorMessage: string | null
  ) => {
    setAlertVisible(true);
    setIsAlertSuccess(success);
    if (success) {
      formik.resetForm();
      setAlertMessage('Password changed successfully.');
    } else {
      setAlertMessage(errorMessage);
    }
  };

  const [submitHandler, isLoading] = useChangePassword(handlePasswordChangeResult);

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      repeatedNewPassword: '',
    },
    validationSchema: ChangePasswordSchema,
    onSubmit: submitHandler,
  });

  return (
    <>
      {alerVisible && (
        <Alert
          status={isAlertSuccess ? 'success' : 'error'}
          variant="subtle"
          mt="3"
          rounded="lg"
        >
          <AlertIcon />
          {alertMessage}
          <Spacer />
          <CloseButton onClick={() => setAlertVisible(false)} />
        </Alert>
      )}
      <Box maxW="sm" mt="5">
        <FormikProvider value={formik}>
          <Form>
            <PasswordField
              size="md"
              label="Old password"
              name="oldPassword"
              shouldValidate={false}
              id="oldPassword"
              placeholder="Your old password."
            />
            <PasswordField
              size="md"
              label="New password"
              name="newPassword"
              id="newPassword"
              placeholder="At least 6 characters."
            />
            <PasswordField
              size="md"
              label="Repeat new password"
              name="repeatedNewPassword"
              id="repeatedNewPassword"
              placeholder="Repeat new password."
            />
            <SubmitButton
              px="5"
              size="md"
              fontSize="0.95rem"
              mt="3"
              isFullWidth={false}
              isLoading={isLoading}
            >
              Change password
            </SubmitButton>
          </Form>
        </FormikProvider>
      </Box>
    </>
  );
};
