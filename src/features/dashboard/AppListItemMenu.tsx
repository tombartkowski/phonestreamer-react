import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { FaShare, FaEllipsisV, FaTrash } from 'react-icons/fa';
import { DeleteAppAlertDialog } from './DeleteAppAlertDialog';
export const AppListItemMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu>
      <DeleteAppAlertDialog isOpen={isOpen} onClose={onClose} />
      <MenuButton
        rounded="lg"
        as={IconButton}
        aria-label="Options"
        icon={<Icon as={FaEllipsisV} />}
      />
      <MenuList>
        <MenuItem icon={<Icon as={FaShare} />}>Share</MenuItem>
        <MenuItem onClick={onOpen} color="red.400" icon={<Icon as={FaTrash} />}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
