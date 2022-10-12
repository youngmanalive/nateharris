import React from 'react';

import { useApp, VIEWS } from '../../context';
import Back from '../../components/back';
import Section from '../../components/section';
import PROJECTS, { PROJECT_TYPES } from '../../content/projects';
import Action from '../../components/action';

const Portfolio = () => {
  const { goToProject } = useApp();

  return (
    <>
      <Back to={VIEWS.main} />
      <Section>
        <p>
          you’ll often find me tinkering and building things in my
          spare time. explore some stuff i’ve made over the years:
        </p>
        <ul>
          {Object.entries(PROJECTS).map(([name, project]) => {
            const props =
              project.type === PROJECT_TYPES.link
                ? { href: project.data.href }
                : { onClick: () => goToProject(name) };

            return (
              <li key={name}>
                <Action content={name} label={name} {...props} />
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
};

export default Portfolio;
