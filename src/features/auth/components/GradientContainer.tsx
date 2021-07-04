import { FC } from 'react';
import { Box } from '@chakra-ui/react';

export const GradientContainer: FC = ({ children }) => {
  return (
    <Box
      minW="100vw"
      display="flex"
      flexDirection="column"
      bgGradient="linear(to-r, #2A4365, #086F83)"
      minH="100vh"
    >
      {children}
    </Box>
  );
};
