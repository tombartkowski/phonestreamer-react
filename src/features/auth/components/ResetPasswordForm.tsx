import { Form, useFormik, FormikProvider } from 'formik';
import { EmailInput } from '../components/EmailInput';
import { FC } from 'react';
import { useAuthAction } from '../hooks/useAuthAction';
import { useAuthResultHandler } from '../hooks/useAuthResultHandler';
import { SubmitButton } from './SubmitButton';

type ResetPasswordFormProps = {
  onResetPasswordSuccess: (email: string) => void;
};
export const ResetPasswordForm: FC<ResetPasswordFormProps> = ({
  onResetPasswordSuccess,
}) => {
  const [resetPassword, isLoading] = useAuthAction(
    'reset-password',
    'email',
    useAuthResultHandler(onResetPasswordSuccess)
  );
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: resetPassword,
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <EmailInput
          name="email"
          placeholder={'Your email.'}
          shouldValidate={false}
        />
        <SubmitButton isLoading={isLoading}>Send reset instructions</SubmitButton>
      </Form>
    </FormikProvider>
  );
};
