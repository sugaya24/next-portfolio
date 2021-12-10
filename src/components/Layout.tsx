import { ReactNode } from 'react';
import Navbar from './Navbar';
import { Box, Container } from '@chakra-ui/react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Navbar />
      <Container pt={16} maxW={`3xl`}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
