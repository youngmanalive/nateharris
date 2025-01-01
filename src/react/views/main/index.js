import React from 'react';

import Info from './info';
import Section from '../../components/section';
import Action from '../../components/action';
import { useApp, VIEWS } from '../../context';

const Main = () => {
  const { setView } = useApp();
  return (
    <>
      <Section title="about">
        <p>
          i am a software engineer living in pennsylvania with my wife and son.
        </p>
      </Section>
      <Section title="work">
        <p>
          i currently work remotely building and maintaining web applications,
          whether that’s rich user interfaces, feature architecture, or
          developer tooling.
        </p>
        <p>
          <Action content="learn more..." onClick={() => setView(VIEWS.bio)} />
        </p>
      </Section>
      <Info />
    </>
  );
};

export default Main;
