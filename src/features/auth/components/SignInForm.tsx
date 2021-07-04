import { Form, useFormik, FormikProvider } from 'formik';
import { PasswordField } from './PasswordField';
import * as Yup from 'yup';
import { FC } from 'react';
import { Link } from './Link';
import { InputField } from './InputField';
import { SubmitButton } from './SubmitButton';
import { useAuthResultHandler } from '../hooks/useAuthResultHandler';
import { useAuthAction } from '../hooks/useAuthAction';

type SignInFormProps = {
  onSignInSuccess: () => void;
};
export const SignInForm: FC<SignInFormProps> = ({ onSignInSuccess }) => {
  const SignInSchema = Yup.object({
    email: Yup.string()
      .strict()
      .required("Please don't leave the email empty.")
      .email('Please make sure the email has a correct format.'),
    password: Yup.string().required("Please don't leave the password empty."),
  });

  const [signin, isLoading] = useAuthAction(
    'signin',
    'email',
    useAuthResultHandler(onSignInSuccess)
  );

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    validateOnMount: true,
    onSubmit: signin,
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <InputField
          name="email"
          id="email"
          label="Email"
          type="email"
          placeholder="Your email."
        />
        <PasswordField name="password" placeholder="Your password." />
        <Link
          mt="-2"
          fontSize="0.92rem"
          fontWeight="medium"
          display="block"
          href="/reset-password"
        >
          I forgot my password.
        </Link>
        <SubmitButton isLoading={isLoading}>Sign in</SubmitButton>
      </Form>
    </FormikProvider>
  );
};
