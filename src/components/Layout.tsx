import { ReactNode } from 'react';
import Navbar from './Navbar';
import { Box, Container } from '@chakra-ui/react';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box className={`layout`} h={`100vh`} display={`flex`} flexDir={`column`}>
      <Navbar />
      <Container pt={16} maxW={`3xl`} className="main" flex={`1 0 auto`}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
