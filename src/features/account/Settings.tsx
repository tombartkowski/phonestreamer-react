import { Box, Divider, Text, Icon, AlertIcon } from '@chakra-ui/react';
import { useUser } from '../../hooks/useUser';
import { ChangePassword } from './ChangePassword';
import { FaGithub } from 'react-icons/fa';

export const Settings = () => {
  const [user] = useUser();
  console.log(user);
  return (
    <Box py="4">
      <Text fontSize="lg" fontWeight="medium" textColor="gray.100" mb="1.5">
        Change password
      </Text>
      <Divider />
      {user.signupMethod === 'github' && (
        <Box w="xl" mt="4" rounded="xl" p="5" bg="#90cdf433">
          <Icon as={FaGithub} w="10" h="10" />
          <Text fontWeight="medium" mt="2">
            As a proud Github user there is no need to change your password. <br />
            Because there is none.
          </Text>
        </Box>
      )}
      {user.signupMethod === 'email' && <ChangePassword />}
    </Box>
  );
};
