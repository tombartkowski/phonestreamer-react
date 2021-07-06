import { Icon, Button, MenuButton as ChakraMenuButton } from '@chakra-ui/react';
import { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type MenuButtonProps = {
  title: string;
};

export const MenuButton: FC<MenuButtonProps> = ({ title }) => {
  return (
    <ChakraMenuButton
      as={Button}
      textColor="gray.400"
      _hover={{ textColor: '#EDF2F7', backgroundColor: '#272F3F' }}
      _active={{ textColor: 'white', backgroundColor: '#374153' }}
      variant="outline"
      rightIcon={<Icon as={FaChevronDown} width="3" height="3" />}
    >
      {title}
    </ChakraMenuButton>
  );
};
