import React from 'react';

const CodeSandbox = ({ src, title, id }) => {
  return <iframe className='codesandbox' title={title || id} src={src} />;
};

export default CodeSandbox;
