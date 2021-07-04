import { Button, useToast } from '@chakra-ui/react';
import { Form, useFormik, FormikProvider } from 'formik';
import { EmailInput } from '../../components/EmailInput';
import { PasswordField } from '../../components/PasswordField';
import * as Yup from 'yup';
import { CheckboxField } from '../../components/CheckboxField';
import { Link } from '../../components/Link';
import { useSignup } from '../hooks/useSignup';
import { useDebouncedRequest } from '../../../../api/useDebouncedRequest';
import { Request } from '../../../../api/request';
import { AuthRequest, ValidationResult } from '../../../../api/authRequest';
import { Toast } from '../../../../components/Toast';
import { FC } from 'react';

type SignupFormProps = {
  onSignupSuccess: () => void;
};
export const SignupForm: FC<SignupFormProps> = ({ onSignupSuccess }) => {
  const toast = useToast();

  const SignupSchema = Yup.object({
    email: Yup.string()
      .strict()
      .required("Please don't leave the email empty.")
      .email('Please make sure the email has a correct format.')
      .test(
        'email-taken',
        'That email is already taken. Sign in instead?',
        async (value, _context) => {
          if (!Yup.string().email().isValidSync(value)) {
            return false;
          } else {
            const result = await requestEmailValidation(
              AuthRequest.validateEmail(value!)
            );
            return (result && result.isValid) || false;
          }
        }
      ),
    password: Yup.string()
      .min(6, 'Try to make the password at least 6 characters long.')
      .required("Please don't leave the password empty."),
    hasAcceptedTerms: Yup.boolean().oneOf(
      [true],
      'Please accept our terms of service.'
    ),
  });

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
      onSignupSuccess();
    }
  };
  const [signup, isLoading] = useSignup('email', onSignupCompleted);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      hasAcceptedTerms: false,
    },
    validationSchema: SignupSchema,
    validateOnMount: true,
    onSubmit: signup,
  });

  const requestEmailValidation: (
    request: Request<ValidationResult>
  ) => Promise<ValidationResult> | undefined = useDebouncedRequest();

  return (
    <FormikProvider value={formik}>
      <Form>
        <EmailInput name="email" />
        <PasswordField name="password" />
        <CheckboxField name="hasAcceptedTerms">
          I accept the <Link>terms of service</Link>.
        </CheckboxField>
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
          Sign up
        </Button>
      </Form>
    </FormikProvider>
  );
};
