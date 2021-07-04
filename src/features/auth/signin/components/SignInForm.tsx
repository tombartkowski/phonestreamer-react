import { Button, useToast } from '@chakra-ui/react';
import { Form, useFormik, FormikProvider } from 'formik';
import { EmailInput } from '../../components/EmailInput';
import { PasswordField } from '../../components/PasswordField';
import * as Yup from 'yup';
import { useSignin } from '../hooks/useSignin';
import { Toast } from '../../../../components/Toast';
import { FC } from 'react';

type SignInFormProps = {
  onSignInSuccess: () => void;
};
export const SignInForm: FC<SignInFormProps> = ({ onSignInSuccess }) => {
  const toast = useToast();

  const SignInSchema = Yup.object({
    email: Yup.string()
      .strict()
      .required("Please don't leave the email empty.")
      .email('Please make sure the email has a correct format.'),
    password: Yup.string().required("Please don't leave the password empty."),
  });

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
      onSignInSuccess();
    }
  };
  const [signup, isLoading] = useSignin('email', onSignInCompleted);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      hasAcceptedTerms: false,
    },
    validationSchema: SignInSchema,
    validateOnMount: true,
    onSubmit: signup,
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <EmailInput name="email" />
        <PasswordField name="password" />
        <Button
          isLoading={isLoading}
          mt="5"
          type="submit"
          _hover={{ bg: 'teal.500' }}
          _active={{ bg: 'teal.600' }}
          textColor="white"
          bg="teal.400"
          size="lg"
          fontSize="md"
          isFullWidth
        >
          Sign in
        </Button>
      </Form>
    </FormikProvider>
  );
};
