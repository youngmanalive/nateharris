import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { trackEvent, trackView, session } from '../util';
import PROJECTS, { PROJECT_TYPES } from '../content/projects';
import { createBrowserHistory, createMemoryHistory } from 'history';

export const VIEWS = {
  main: 'main',
  portfolio: 'tinkerings',
  project: 'project',
  bio: 'bio',
};

const isSsr = typeof window === 'undefined';
const history = isSsr ? createMemoryHistory() : createBrowserHistory();

const AppContext = React.createContext({
  view: VIEWS.main,
  setView: () => {},
  visible: false,
  projectId: null,
  goToProject: () => {},
});

export const AppProvider = ({ children }) => {
  const [view, setView] = useState(VIEWS.main);
  const [projectId, setProjectId] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (document?.hidden) {
      const handler = () => {
        setVisible(true);
        trackEvent('doc visible');
        document.removeEventListener('visibilitychange', handler);
      };
      trackEvent('doc hidden');
      document.addEventListener('visibilitychange', handler);
    } else {
      setVisible(true);
    }

    const [initialView, initialProjectId] = session.getView();
    setView(initialView);
    setProjectId(initialProjectId);
    session.setView(initialView, initialProjectId);
    trackView(initialView);
  }, []);

  useEffect(() => {
    const unlisten = history.listen(({ location }) => {
      const { view, projectId } = location.state || {
        view: VIEWS.main,
        projectId: null,
      };
      setView(view);
      setProjectId(projectId);
      session.setView(view, projectId);
      trackView(view);
    });

    return () => unlisten();
  }, []);

  const goToProject = useCallback((projectId) => {
    history.push(null, { view: VIEWS.project, projectId });
  }, []);

  const goTo = useCallback((view) => {
    history.push(null, { view });
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
