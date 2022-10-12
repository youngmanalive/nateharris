import React from 'react';

import { VIEWS } from '../../context';
import Back from '../../components/back';
import Info from '../main/info';
import Section from '../../components/section';

const SKILLS = [
  'typescript',
  'react',
  'mobx',
  'gatsby',
  'laravel',
  'php',
  'mysql',
];

const Skills = () => (
  <>
    {SKILLS.map((skill, index) => {
      const isLast = index === SKILLS.length - 1;
      return (
        <React.Fragment key={skill}>
          {isLast && 'and '}
          <strong>{skill}</strong>
          {!isLast && ', '}
        </React.Fragment>
      );
    })}
  </>
);

const Bio = () => {
  return (
    <>
      <Back to={VIEWS.main} />
      <Section title='skills'>
        <p>
          much of my passion lies in client-side development, but i also love
          working across the stack. i consider myself an expert in{' '}
          <strong>react</strong> and am competent in modern{' '}
          <strong>frontend practices</strong> and <strong>tooling</strong>.
        </p>
        <p>
          my current scopes include <Skills />, to name a few. i learn by doing
          and am always pushing myself to advance and hone my skills.
        </p>
        <p>
          i am empowered when well-balanced testing coverage and peer review are
          on my side.
        </p>
      </Section>
      <Section title='experience'>
        <p>
          i have been shipping production level code in both frontend and
          backend contexts since 2019. before that you might have seen me
          pulling espresso shots, stacking produce, or working in retail
          horticulture.
        </p>
        <p>
          collaboration and team support are strong factors that have driven my
          success and day-to-day. i thrive on problem solving and helping
          people.
        </p>
      </Section>
      <Info />
    </>
  );
};

export default Bio;
