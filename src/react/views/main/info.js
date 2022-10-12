import React from 'react';

import { INFORMATION } from '../../content/information';
import { useApp } from '../../context';
import Action from '../../components/action';
import Section from '../../components/section';

const Info = () => {
  const { setView, visible } = useApp();

  return (
    <Section title='info'>
      <ul>
        {INFORMATION.map(({ content, label, href, view, visibility }) => {
          if (visibility && !visible) return null;

          return (
            <li key={content}>
              <Action
                content={content}
                href={href}
                label={label}
                onClick={view ? () => setView(view) : undefined}
              />
            </li>
          );
        }).filter(Boolean)}
      </ul>
    </Section>
  );
};

export default Info;
