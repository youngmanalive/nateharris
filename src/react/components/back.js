import React from 'react';

import { useApp } from '../context';

const Back = ({ to, text = 'back' }) => {
  const { setView } = useApp();
  return (
    <div className='back'>
      <button tabIndex={1} onClick={() => setView(to)}>
        ← {text}
      </button>
    </div>
  );
};

export default Back;
