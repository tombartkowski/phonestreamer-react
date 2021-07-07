import { Menu, MenuList, MenuGroup, MenuItem, MenuDivider } from '@chakra-ui/react';
import { MenuButton } from './MenuButton';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import { FC } from 'react';

type AccountMenuProps = {
  isActive: boolean;
};

export const AccountMenu: FC<AccountMenuProps> = ({ isActive }) => {
  return (
    <Menu>
      <MenuButton isActive={isActive} title="Account" />
      <MenuList>
        <MenuGroup
          marginStart="3"
          textColor="gray.433"
          fontWeight="bold"
          title="Account"
          mb="1.5"
        >
          <MenuItem as={Link} to="/account/settings" fontWeight="medium">
            Settings
          </MenuItem>
          <MenuItem as={Link} to="/account/billing" fontWeight="medium">
            Billing
          </MenuItem>
          <MenuItem as={Link} to="/account/usage" fontWeight="medium">
            Usage
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem
          onClick={() => {
            firebase.auth().signOut();
          }}
          textColor="gray.400"
          fontWeight="medium"
        >
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
