import { Box, Text, Icon, HStack, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaEnvelope } from 'react-icons/fa';

type ResetPasswordBannerProps = {
  email: string;
};

export const ResetPasswordBanner: FC<ResetPasswordBannerProps> = ({ email }) => {
  return (
    <Box as="section" flex="0">
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        py="3"
        px={{ base: '3', md: '6', lg: '8' }}
        color="white"
        bg="green.500"
      >
        <HStack spacing="3">
          <Icon as={FaEnvelope} fontSize="2xl" h="5" />
          <Text fontWeight="medium" marginEnd="2">
            We&apos;ve send the password reset instructions to <b>{email}</b>. Check
            your inbox.
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};
