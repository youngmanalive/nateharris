import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

const trackEvent = (eventName, properties = {}) => {
  window.gtag?.('event', eventName, properties);
};

export const THEMES = {
  minimal: 'minimal',
  classic: 'classic',
};

const AppContext = React.createContext({
  visible: false,
  theme: THEMES.minimal,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [theme, setThemeState] = useState(THEMES.classic);

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
  }, []);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const setTheme = useCallback((t) => {
    setThemeState(t);
    trackEvent('theme', { theme: t });
  }, []);

  const state = useMemo(
    () => ({ visible, theme, setTheme }),
    [visible, theme, setTheme],
  );

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
