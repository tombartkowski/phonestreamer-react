import { IconButton, InputRightElement, useDisclosure } from '@chakra-ui/react';
import { FieldHookConfig } from 'formik';
import { FC } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { InputField } from './InputField';

type PasswordFieldProps = {
  placeholder: string;
  shouldValidate?: boolean;
};

export const PasswordField: FC<FieldHookConfig<string> & PasswordFieldProps> = ({
  placeholder,
  shouldValidate = true,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const onClickReveal = () => {
    onToggle();
  };

  return (
    <InputField
      name="password"
      shouldValidate={shouldValidate}
      id="password"
      label="Password"
      type={isOpen ? 'text' : 'password'}
      placeholder={placeholder}
    >
      <InputRightElement>
        <IconButton
          bg="transparent !important"
          variant="ghost"
          aria-label={isOpen ? 'Mask password' : 'Reveal password'}
          icon={isOpen ? <HiEyeOff /> : <HiEye />}
          onClick={onClickReveal}
        />
      </InputRightElement>
    </InputField>
  );
};
