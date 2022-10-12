import React from 'react';
import { useApp, VIEWS } from '../../context';

const SUBTEXT = {
  [VIEWS.main]: 'web developer',
  [VIEWS.bio]: 'web developer',
};

const Header = () => {
  const { view, projectId } = useApp();

  const subText = projectId || SUBTEXT[view] || view;

  return (
    <header>
      <h1>nate harris</h1>
      <h2 key={subText}>{subText}</h2>
    </header>
  );
};

export default Header;
