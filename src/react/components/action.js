import React from 'react';

import { trackEvent } from '../util';

const Action = ({ content, label, href, onClick }) => {
  const actionProps = {
    'aria-label': label,
    className: 'action',
    onClick: () => {
      if (!href) trackEvent('click', { content });
      if (onClick) onClick();
    }
  };

  if (href) {
    return (
      <a href={href} {...actionProps} target='_blank' rel='noopener noreferrer'>
        {content}
      </a>
    );
  }

  return <button {...actionProps}>{content}</button>;
};

export default Action;
