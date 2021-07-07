import { IconButton, InputRightElement, useDisclosure } from '@chakra-ui/react';
import { FieldHookConfig } from 'formik';
import { FC } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { InputField, InputFieldSize } from './InputField';

type PasswordFieldProps = {
  placeholder: string;
  name?: string;
  id?: string;
  label?: string;
  shouldValidate?: boolean;
  size?: InputFieldSize;
};

export const PasswordField: FC<FieldHookConfig<string> & PasswordFieldProps> = ({
  placeholder,
  id = 'password',
  name = 'password',
  label = 'Password',
  shouldValidate = true,
  size = 'lg',
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const onClickReveal = () => {
    onToggle();
  };

  return (
    <InputField
      name={name}
      shouldValidate={shouldValidate}
      id={id}
      label={label}
      type={isOpen ? 'text' : 'password'}
      size={size}
      placeholder={placeholder}
    >
      <InputRightElement>
        <IconButton
          textColor="gray.400"
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
