import { Flex, Spacer, Stack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { AccountMenu } from './AccountMenu';
import { NavbarButton } from './NavbarButton';
import { NavbarLogo } from './NavbarLogo';

export const Navbar = () => {
  const location = useLocation();
  return (
    <Flex py="3" mt="2" bg="gray.800" align="center">
      <NavbarLogo />
      <Spacer />
      <Stack spacing={4} direction="row" align="center">
        <NavbarButton
          isActive={location.pathname.includes('/dashboard')}
          path="/dashboard"
          title="Dashboard"
        />
        <AccountMenu isActive={location.pathname.includes('/account')} />
      </Stack>
    </Flex>
  );
};
