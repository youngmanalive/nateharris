import React from 'react';
import { ThemeProvider, THEMES, useApp } from './context';
import Minimal from './themes/minimal';
import Classic from './themes/classic';

const THEME_COMPONENTS = {
  [THEMES.minimal]: Minimal,
  [THEMES.classic]: Classic,
};

const THEME_LABELS = {
  [THEMES.minimal]: 'minimal',
  [THEMES.classic]: 'classic',
};

const ThemePicker = () => {
  const { visible, theme, setTheme } = useApp();

  if (!visible) return null;

  return (
    <div className="theme-picker">
      <select
        className="theme-picker-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        aria-label="choose a theme"
      >
        {Object.entries(THEME_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

const ThemeRenderer = () => {
  const { theme } = useApp();
  const Component = THEME_COMPONENTS[theme] || Minimal;
  return <Component />;
};

const App = () => (
  <ThemeProvider>
    <ThemePicker />
    <ThemeRenderer />
  </ThemeProvider>
);

export default App;
