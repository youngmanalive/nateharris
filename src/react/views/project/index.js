import React from 'react';
import Back from '../../components/back';
import { useProject, VIEWS } from '../../context';
import Section from '../../components/section';
import { PROJECT_TYPES } from '../../content/projects';
import CodeSandbox from './codesandbox';

const Project = () => {
  const { project } = useProject();
  const { type, description, data } = project;

  const renderProject = () => {
    switch (type) {
      case PROJECT_TYPES.codesandbox:
        return <CodeSandbox {...data} />;
      default:
        return null;
    }
  };

  const renderDeets = () => {
    switch (true) {
      case Array.isArray(description):
        return description.map((chunk) => <p key={chunk}>{chunk}</p>);
      case typeof description === 'string':
        return <p>{description}</p>
      default: // JSX
        return description;
    }
  };

  return (
    <>
      <Back to={VIEWS.portfolio} />
      <Section>
        {renderDeets(description)}
        {renderProject()}
      </Section>
    </>
  );
};

export default Project;
