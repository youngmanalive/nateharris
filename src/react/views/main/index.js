import React from 'react';

import Info from './info';
import Section from '../../components/section';
import Action from '../../components/action';
import { useApp, VIEWS } from '../../context';

const Main = () => {
  const { setView } = useApp();
  return (
    <>
      <Section title='about'>
        <p>
          i am a full stack engineer living in northern california with my wife
          and son.
        </p>
      </Section>
      <Section title='work'>
        <p>
          i currently work remotely building and maintaining web applications,
          whether that’s database and feature architecture or rich user
          interfaces.
        </p>
        <p>
          <Action content='learn more...' onClick={() => setView(VIEWS.bio)} />
        </p>
      </Section>
      <Info />
    </>
  );
};

export default Main;
