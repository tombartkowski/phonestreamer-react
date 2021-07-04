import { Input } from '@chakra-ui/react';
import { FieldInputProps } from 'formik';
import { FC, FocusEvent } from 'react';

type TextInputProps = {
  type: string;
  id: string;
  isValid: boolean;
  isTouched: boolean;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
};

export const TextInput: FC<TextInputProps & FieldInputProps<string>> = ({
  type,
  id,
  isValid,
  isTouched,
  onFocus,
  ...field
}) => {
  return (
    <Input
      onFocus={onFocus}
      bg="gray.733"
      _hover={{ bg: 'gray.666' }}
      focusBorderColor={isValid ? 'green.400' : 'blue.400'}
      errorBorderColor={
        isValid ? (isTouched ? 'green.400' : 'transparent') : 'red.300'
      }
      variant="filled"
      size="lg"
      type={type}
      fontSize="md"
      id={id}
      {...field}
    />
  );
};
