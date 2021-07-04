import {
  FormControl,
  FormLabel,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import { FC, useRef, FocusEvent, useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { InputErrorMessage } from './InputErrorMessage';
import { TextInput } from './TextInput';

export const PasswordField: FC<FieldHookConfig<string>> = ({ ...props }) => {
  const [field, meta] = useField(props);
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    field.onBlur(event);
    setFocused(false);
  };

  const onClickReveal = () => {
    onToggle();
    const input = inputRef.current;
    if (input) {
      input.focus({ preventScroll: true });
      const length = input.value.length * 2;
      requestAnimationFrame(() => {
        input.setSelectionRange(length, length);
      });
    }
  };
  const showFeedback = !meta.error || (!focused && meta.touched);

  return (
    <>
      <FormControl isInvalid={showFeedback}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup size="lg" variant="filled">
          <TextInput
            {...field}
            isTouched={meta.touched}
            id="password"
            isValid={!meta.error}
            onBlur={handleBlur}
            onFocus={handleFocus}
            name="password"
            type={isOpen ? 'text' : 'password'}
          />
          <InputRightElement>
            <IconButton
              bg="transparent !important"
              variant="ghost"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputRightElement>
        </InputGroup>
        <InputErrorMessage
          visible={!!meta.error && !focused && meta.touched}
          message={
            meta.error ||
            'Please make sure the password has has at least 6 characters.'
          }
        />
      </FormControl>
    </>
  );
};
