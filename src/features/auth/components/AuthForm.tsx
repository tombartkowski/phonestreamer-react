import { useFormik, FormikProvider, Form } from 'formik';
import { FC } from 'react';
import { AnyObjectSchema } from 'yup';
import { AuthAction, useAuthAction } from '../hooks/useAuthAction';
import { useAuthResultHandler } from '../hooks/useAuthResultHandler';
import { InputField } from './InputField';
import { PasswordField } from './PasswordField';
import { SubmitButton } from './SubmitButton';

type FieldDescription = {
  name: string;
  id: string;
  label: string;
  type: string;
  placeholder: string;
  shouldValidate?: boolean;
};

type AuthFormProps = {
  fields: FieldDescription[];
  initialValues: Record<string, any>;
  authAction: AuthAction;
  submitButtonText: string;
  validationSchema?: AnyObjectSchema;
  validateOnMount?: boolean;
  onSubmitSuccess: (data?: any) => void;
};

export const AuthForm: FC<AuthFormProps> = props => {
  const [submitHandler, isLoading] = useAuthAction(
    props.authAction,
    'email',
    useAuthResultHandler(props.onSubmitSuccess)
  );

  const formik = useFormik({
    initialValues: props.initialValues,
    validationSchema: props.validationSchema,
    validateOnMount: props.validateOnMount,
    onSubmit: submitHandler,
  });

  const formFields = props.fields.map(fieldDescription => {
    if (fieldDescription.type === 'password') {
      return (
        <PasswordField
          key={fieldDescription.name}
          name={fieldDescription.name}
          placeholder={fieldDescription.placeholder}
        />
      );
    } else {
      return (
        <InputField
          key={fieldDescription.name}
          name={fieldDescription.name}
          placeholder={fieldDescription.placeholder}
          id={fieldDescription.id}
          label={fieldDescription.label}
          type={fieldDescription.type}
          shouldValidate={fieldDescription.shouldValidate}
        />
      );
    }
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        {formFields}
        {props.children}
        <SubmitButton isLoading={isLoading}>{props.submitButtonText}</SubmitButton>
      </Form>
    </FormikProvider>
  );
};
