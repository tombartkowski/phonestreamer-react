import { FormControl, FormLabel, InputGroup } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import { FC, FocusEvent, useState } from 'react';

import { InputErrorMessage } from './InputErrorMessage';
import { TextInput } from './TextInput';

type InputFieldProps = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  shouldValidate?: boolean;
};

export const InputField: FC<FieldHookConfig<string> & InputFieldProps> = ({
  id,
  type,
  label,
  placeholder,
  shouldValidate = true,
  children,
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
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup size="lg" variant="filled">
        <TextInput
          {...field}
          id={id}
          type={type}
          isTouched={meta.touched}
          isValid={!meta.error}
          placeholder={placeholder}
          name={props.name}
          shouldValidate={shouldValidate}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {children}
      </InputGroup>
      <InputErrorMessage
        visible={!!meta.error && !focused && meta.touched}
        message={meta.error || 'Please make sure the input is correct.'}
      />
    </FormControl>
  );
};

//   const { isOpen, onToggle } = useDisclosure();
//   const inputRef = useRef<HTMLInputElement>(null);

//   const onClickReveal = () => {
//     onToggle();
//     const input = inputRef.current;
//     if (input) {
//       input.focus({ preventScroll: true });
//       const length = input.value.length * 2;
//       requestAnimationFrame(() => {
//         input.setSelectionRange(length, length);
//       });
//     }
//   };
