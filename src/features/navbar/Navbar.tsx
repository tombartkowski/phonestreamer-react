import { Flex, Spacer, Stack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { AccountMenu } from './AccountMenu';
import { NavbarButton } from './NavbarButton';
import { NavbarLogo } from './NavbarLogo';

export const Navbar = () => {
  const location = useLocation();
  return (
    <Flex p="3" mt="2" mx="auto" bg="gray.800" maxW="900px" align="center">
      <NavbarLogo />
      <Spacer />
      <Stack spacing={4} direction="row" align="center">
        <NavbarButton
          isActive={location.pathname.includes('/dashboard')}
          path="/dashboard"
          title="Dashboard"
        />
        <AccountMenu />
      </Stack>
    </Flex>
  );
};
