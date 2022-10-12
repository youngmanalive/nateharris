import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PROJECTS, { PROJECT_TYPES } from '../content/projects';

export const VIEWS = {
  main: 'main',
  portfolio: 'portfolio',
  project: 'project',
  bio: 'bio',
};

const AppContext = React.createContext({
  view: VIEWS.main,
  setView: () => {},
  visible: false,
  projectId: null,
  goToProject: () => {},
});

export const AppProvider = ({ children }) => {
  const [view, setView] = useState(VIEWS.main);
  const [visible, setVisible] = useState(false);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    if (document?.hidden) {
      const handler = () => {
        setVisible(true);
        document.removeEventListener('visibilitychange', handler);
      };
      document.addEventListener('visibilitychange', handler);
    } else {
      setVisible(true);
    }
  }, []);

  const goToProject = useCallback((projectId) => {
    setProjectId(projectId);
    setView(VIEWS.project);
  }, []);

  const goTo = useCallback((view) => {
    setProjectId(null);
    setView(view);
  }, []);

  const state = useMemo(
    () => ({ view, setView: goTo, visible, projectId, goToProject }),
    [view, setView, visible, projectId, goToProject]
  );

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);

export const useProject = () => {
  const { projectId } = useApp();

  const project = PROJECTS[projectId];

  return {
    project,
    isCodesandbox: !!project && project.type === PROJECT_TYPES.codesandbox,
  };
};
