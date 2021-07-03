import { Button, HTMLChakraProps } from '@chakra-ui/react';
import { Form, useFormik, FormikProvider } from 'formik';
import { EmailInput } from './EmailInput';
import { PasswordField } from './PasswordField';
import * as Yup from 'yup';
import { CheckboxField } from './CheckboxField';
import { Link } from './Link';
import { useSignup } from './useSignup';

export const SignupForm = (props: HTMLChakraProps<'form'>) => {
  const SignupSchema = Yup.object({
    email: Yup.string()
      .required("Please don't leave the email empty.")
      .email('Please make sure the email has a correct format.'),
    password: Yup.string()
      .min(6, 'Try to make the password at least 6 characters long.')
      .required("Please don't leave the password empty."),
    hasAcceptedTerms: Yup.boolean().oneOf(
      [true],
      'Please accept our terms of service.'
    ),
  });

  const onSignupCompleted = (data?: any, error?: Error) => {
    console.log(data, error);
  };
  const [signup, isLoading] = useSignup(onSignupCompleted);
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
          Sign in
        </Button>
      </Form>
    </FormikProvider>
  );
};
