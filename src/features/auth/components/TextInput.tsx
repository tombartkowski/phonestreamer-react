import { Input } from '@chakra-ui/react';
import { FieldInputProps } from 'formik';
import { FC, FocusEvent } from 'react';

type TextInputProps = {
  type: string;
  placeholder: string;
  id: string;
  isValid: boolean;
  isTouched: boolean;
  shouldValidate?: boolean;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
};

export const TextInput: FC<TextInputProps & FieldInputProps<string>> = ({
  type,
  id,
  isValid,
  isTouched,
  placeholder,
  shouldValidate = true,
  onFocus,
  ...field
}) => {
  return (
    <Input
      onFocus={onFocus}
      placeholder={placeholder}
      _placeholder={{ color: 'gray.500' }}
      bg="gray.733"
      _hover={{ bg: 'gray.666' }}
      focusBorderColor={isValid && shouldValidate ? 'green.400' : 'blue.400'}
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
