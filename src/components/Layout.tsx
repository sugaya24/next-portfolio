import { ReactNode } from 'react';
import Navbar from './Navbar';
import { Box, Container } from '@chakra-ui/react';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Navbar />
      <Container pt={16} maxW={`3xl`}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
