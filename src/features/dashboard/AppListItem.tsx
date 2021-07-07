import {
  Icon,
  Box,
  Center,
  Text,
  Image,
  Heading,
  VStack,
  HStack,
  Badge,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FaShare, FaEllipsisV, FaTrash } from 'react-icons/fa';
import { GoVersions } from 'react-icons/go';
import SuperEllipse, { Preset } from 'react-superellipse';
import { App } from '../../entities/app';
import { AppListItemIcon } from './AppListItemIcon';
import { AppListItemMenu } from './AppListItemMenu';

type AppListItemProps = {
  app: App;
};

export const AppListItem: FC<AppListItemProps> = ({ app }) => {
  return (
    <HStack
      transition="all 0.1s ease-out"
      // _hover={{ bg: '#272F3F' }}
      // cursor="pointer"
      px="7"
      py={4}
      spacing="0"
      align="center"
    >
      <AppListItemIcon iconUrl={app?.iconUrl} />
      <Box pl="5">
        <Flex align="center">
          <Text fontSize="1.3rem" fontWeight="semibold">
            {app?.altName || 'App Name'}
          </Text>
          <Badge colorScheme="cyan" style={{ textTransform: 'none' }} ml="3">
            {app.version}
          </Badge>
          <Badge colorScheme="blue" ml="2">
            {'Build ' + app.buildNumber}
          </Badge>
        </Flex>
        <Text fontSize="0.82rem" fontWeight="medium" textColor="gray.433">
          {app?.bundleIdentifier || 'com.bundle.identifier'}
        </Text>
      </Box>
      <Spacer />
      <HStack spacing="0.5">
        <Button
          variant="ghost"
          bg="#9decf91f"
          _hover={{ bg: '#9decf92e' }}
          _active={{ bg: '#9decf93d' }}
          mr="2"
          px="5"
          colorScheme="cyan"
        >
          Launch
        </Button>
        <AppListItemMenu />
      </HStack>
    </HStack>
  );
};
