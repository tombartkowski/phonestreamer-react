import { FormControl, FormLabel } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import { FC, useState, FocusEvent } from 'react';
import { InputErrorMessage } from './InputErrorMessage';
import { TextInput } from './TextInput';

export const EmailInput: FC<FieldHookConfig<string>> = ({ ...props }) => {
  const [field, meta] = useField(props);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    field.onBlur(event);
    setFocused(false);
  };
  const showFeedback = !meta.error || (!focused && meta.touched);

  return (
    <>
      <FormControl isInvalid={showFeedback}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextInput
          {...field}
          id="name"
          isValid={!meta.error}
          name="email"
          type="email"
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <InputErrorMessage
          visible={!!meta.error && !focused && meta.touched}
          message={meta.error || 'Please make sure the email has a correct format.'}
        />
      </FormControl>
    </>
  );
};
