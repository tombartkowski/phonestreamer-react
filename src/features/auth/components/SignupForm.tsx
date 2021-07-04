import { Form, useFormik, FormikProvider } from 'formik';
import { PasswordField } from './PasswordField';
import * as Yup from 'yup';
import { CheckboxField } from './CheckboxField';
import { Link } from './Link';
import { useAuthAction } from '../hooks/useAuthAction';
import { useDebouncedRequest } from '../../../api/useDebouncedRequest';
import { Request } from '../../../api/request';
import { AuthRequest, ValidationResult } from '../../../api/authRequest';
import { FC } from 'react';
import { InputField } from './InputField';
import { SubmitButton } from './SubmitButton';
import { useAuthResultHandler } from '../hooks/useAuthResultHandler';

type SignupFormProps = {
  onSignupSuccess: () => void;
};
export const SignupForm: FC<SignupFormProps> = ({ onSignupSuccess }) => {
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

  const [signup, isLoading] = useAuthAction(
    'signup',
    'email',
    useAuthResultHandler(onSignupSuccess)
  );

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
        <InputField
          label="Email"
          placeholder="E.g. john.doe@domain.com"
          id="email"
          type="email"
          name="email"
        />
        <PasswordField name="password" placeholder="At least 6 characters." />
        <CheckboxField name="hasAcceptedTerms">
          I accept the <Link>terms of service</Link>.
        </CheckboxField>
        <SubmitButton isLoading={isLoading}>Sign up</SubmitButton>
      </Form>
    </FormikProvider>
  );
};
