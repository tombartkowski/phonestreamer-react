import { Menu, MenuList, MenuGroup, MenuItem, MenuDivider } from '@chakra-ui/react';
import { MenuButton } from './MenuButton';
import firebase from 'firebase/app';
import 'firebase/auth';

export const AccountMenu = () => {
  return (
    <Menu>
      <MenuButton title="Account" />
      <MenuList>
        <MenuGroup
          marginStart="3"
          textColor="gray.433"
          fontWeight="bold"
          title="Account"
          mb="1.5"
        >
          <MenuItem fontWeight="medium">Settings</MenuItem>
          <MenuItem fontWeight="medium">Billing</MenuItem>
          <MenuItem fontWeight="medium">Usage</MenuItem>
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
