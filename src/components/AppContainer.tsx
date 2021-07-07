import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Navbar } from '../features/navbar/Navbar';

export const AppContainer: FC = ({ children }) => {
  return (
    <Box maxW="900px" mx="auto" px="4" minH="95vh">
      <Navbar />
      {children}
    </Box>
  );
};
