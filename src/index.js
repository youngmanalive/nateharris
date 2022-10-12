import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import './css/reset.css';
import './css/style.css';

import App from './react/app';

const container = document.getElementById('root');
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
