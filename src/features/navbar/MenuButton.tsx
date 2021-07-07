import { Icon, Button, MenuButton as ChakraMenuButton } from '@chakra-ui/react';
import { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type MenuButtonProps = {
  title: string;
  isActive: boolean;
};

export const MenuButton: FC<MenuButtonProps> = ({ title, isActive }) => {
  console.log(isActive);
  return (
    <ChakraMenuButton
      as={Button}
      isActive={isActive}
      textColor={isActive ? 'white' : 'gray.400'}
      _hover={{ textColor: '#EDF2F7', backgroundColor: '#272F3F' }}
      _active={{ color: 'white', backgroundColor: '#374153' }}
      variant="outline"
      rightIcon={<Icon as={FaChevronDown} width="3" height="3" />}
    >
      {title}
    </ChakraMenuButton>
  );
};
