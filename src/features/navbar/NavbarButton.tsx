import { ButtonProps, Button } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type NavbarButtonProps = {
  isActive: boolean;
  title: string;
  path: string;
};

export const NavbarButton: FC<ButtonProps & NavbarButtonProps> = ({
  title,
  isActive,
  path,
  ...props
}) => {
  return (
    <Link to={path}>
      <Button
        as="span"
        textColor={isActive ? 'white' : 'gray.400'}
        _hover={{ textColor: '#EDF2F7', backgroundColor: '#272F3F' }}
        _active={{ textColor: 'white', backgroundColor: '#374153' }}
        variant="ghost"
        {...props}
      >
        {title}
      </Button>
    </Link>
  );
};
