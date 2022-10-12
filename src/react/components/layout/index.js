import React from 'react';
import { useApp, useProject } from '../../context';
import Header from './header';

const Layout = ({ children }) => {
  const { view } = useApp();
  const { isCodesandbox } = useProject();

  return (
    <div className={`app${isCodesandbox ? ' wide' : ''}`}>
      <Header />
      <main key={view}>{children}</main>
    </div>
  );
};

export default Layout;
