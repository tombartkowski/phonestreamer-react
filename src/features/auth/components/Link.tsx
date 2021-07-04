import { chakra, HTMLChakraProps } from '@chakra-ui/system';
import { Link as RouterLink } from 'react-router-dom';

export const Link = (props: HTMLChakraProps<'a'>) => (
  <RouterLink to={props.href + ''}>
    <chakra.a color="teal.200" _hover={{ color: 'teal.300' }} {...props} />
  </RouterLink>
);
