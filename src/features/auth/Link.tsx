import { chakra, HTMLChakraProps } from '@chakra-ui/system';

export const Link = (props: HTMLChakraProps<'a'>) => (
  <chakra.a href="#" color="teal.200" _hover={{ color: 'teal.300' }} {...props} />
);
