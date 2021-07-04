import { Button, ButtonProps } from '@chakra-ui/react';

export const SubmitButton = (props: ButtonProps) => {
  return (
    <Button
      isLoading={props.isLoading}
      mt="5"
      type="submit"
      _hover={{ bg: 'teal.500' }}
      _active={{ bg: 'teal.600' }}
      textColor="white"
      bg="teal.400"
      size="lg"
      fontSize="md"
      isFullWidth
    >
      {props.children}
    </Button>
  );
};
