import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SEO from '../Seo';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
