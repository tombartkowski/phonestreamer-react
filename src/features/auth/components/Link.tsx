import { Link as ChakraLink, HTMLChakraProps } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Link = (props: HTMLChakraProps<'a'>) => (
  <ChakraLink
    as={RouterLink}
    color="teal.200"
    marginStart={props.marginStart}
    _hover={{ color: 'teal.300' }}
    to={props.href + ''}
  >
    {props.children}
    {/* <chakra.a  {...props} /> */}
  </ChakraLink>
);
