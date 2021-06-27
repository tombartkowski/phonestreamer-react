import { extendTheme } from '@chakra-ui/react';
import colors from './colors';

const overrides = {
  colors,
};
export default extendTheme({
  ...overrides,
  config: {
    initialColorMode: 'dark',
  },
});
