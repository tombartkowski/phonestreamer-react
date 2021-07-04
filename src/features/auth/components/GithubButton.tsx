import { Button, Icon, ButtonProps } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export const GithubButton = (props: ButtonProps) => {
  return (
    <Button
      isLoading={props.isLoading}
      onClick={props.onClick}
      bg="black"
      _hover={{ bg: '#141414' }}
      _active={{ bg: '#1f1f1f' }}
      shadow="lg"
      isFullWidth
      mb={5}
      fontSize="md"
      size="lg"
      leftIcon={<Icon as={FaGithub} />}
      color="currentColor"
    >
      Continue with Github
    </Button>
  );
};
