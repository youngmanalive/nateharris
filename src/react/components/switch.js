import React from 'react';

import { useApp } from '../context';

const Switch = ({ children }) => {
  const { view } = useApp();

  return React.Children.toArray(children).find(
    (child) => child.props.viewName === view && React.isValidElement(child)
  );
};

export default Switch;
