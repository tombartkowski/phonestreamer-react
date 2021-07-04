import { FormControl, FormLabel, InputGroup } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import { FC, useState, FocusEvent } from 'react';
import { InputErrorMessage } from './InputErrorMessage';
import { TextInput } from './TextInput';

type EmailFieldProps = {
  placeholder: string;
  shouldValidate?: boolean;
};

export const EmailInput: FC<FieldHookConfig<string> & EmailFieldProps> = ({
  placeholder,
  shouldValidate = true,
  ...props
}) => {
  const [field, meta] = useField(props);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    field.onBlur(event);
    setFocused(false);
  };
  const showFeedback = shouldValidate
    ? !meta.error || (!focused && meta.touched)
    : false;

  return (
    <FormControl isInvalid={showFeedback}>
      <FormLabel htmlFor="email">Email</FormLabel>
      <InputGroup size="lg" variant="filled">
        <TextInput
          {...field}
          id="name"
          type="email"
          isTouched={meta.touched}
          isValid={!meta.error}
          placeholder={placeholder}
          name="email"
          shouldValidate={shouldValidate}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </InputGroup>
      <InputErrorMessage
        visible={!!meta.error && !focused && meta.touched}
        message={meta.error || 'Please make sure the email has a correct format.'}
      />
    </FormControl>
  );
};
