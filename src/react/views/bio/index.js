import React from 'react';

import { VIEWS } from '../../context';
import Back from '../../components/back';
import Info from '../main/info';
import Section from '../../components/section';

const TECH = [
  'react',
  'graphql',
  'relay',
  'tailwind',
  'webpack',
  'figma',
  'react testing library',
  'snowplow',
  'emotion',
  'storybook',
  'typescript',
  'mobx',
  'php',
  'github',
  'laravel',
  'django',
  'mysql',
  'gatsby',
  'cypress',
  'amplitude',
];

const Bio = () => {
  return (
    <>
      <Back to={VIEWS.main} />
      <Section title="expertise">
        <p>
          i am an expert in <strong>react</strong> and am competent in modern{' '}
          <strong>frontend practices</strong> and <strong>tooling</strong>. much
          of my passion lies in client-side development, but i also love working
          across the stack when i can.
        </p>
      </Section>
      <Section title="experience">
        <p>
          i have been shipping production level code in both frontend and
          backend contexts since 2019, working closely with design, product, and
          data teams to bring ideas and visions to life.
        </p>
      </Section>
      <Section title="tech">
        <p>
          i am familiar with a wide range of technologies, frameworks, services,
          and tools. an unordered, non-exhaustive list:
        </p>
        <p>
          <i>{TECH.join(', ')}.</i>
        </p>
      </Section>
      <Info />
    </>
  );
};

export default Bio;
