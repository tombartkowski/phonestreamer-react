import { Box, Container } from '@chakra-ui/react';
import { Router } from './router/router';
function App() {
  return (
    <Container maxW="container.md">
      <Box text textColor="gray.200" pt={10} pb={64}>
        <Router />
      </Box>
    </Container>
  );
}

export default App;
