import React from 'react';

import { AppProvider, VIEWS } from './context';
import Layout from './components/layout';
import Main from './views/main';
import Portfolio from './views/portfolio';
import Project from './views/project';
import Switch from './components/switch';
import Bio from './views/bio';

const App = () => (
  <AppProvider>
    <Layout>
      <Switch>
        <Main viewName={VIEWS.main} />
        <Portfolio viewName={VIEWS.portfolio} />
        <Project viewName={VIEWS.project} />
        <Bio viewName={VIEWS.bio} />
      </Switch>
    </Layout>
  </AppProvider>
);

export default App;
