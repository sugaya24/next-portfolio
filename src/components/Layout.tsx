import { ReactNode } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
