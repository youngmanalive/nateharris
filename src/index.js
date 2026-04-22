import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import './css/reset.css';
import './css/theme-picker.css';
import './css/theme-minimal.css';
// import './css/theme-classic.css';
import './react/v2/themes/classic/theme-classic.css';

import App from './react/v2/app';

const container = document.getElementById('root');
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}

console.log(
  [
    '               __     ',
    '              /\\ \\    ',
    ' __  __    ___\\ \\ \\   ',
    '/\\ \\/\\ \\  / __`\\ \\ \\  ',
    '\\ \\ \\_\\ \\/\\ \\L\\ \\ \\_\\ ',
    ' \\/`____ \\ \\____/\\/\\_\\',
    '  `/___/> \\/___/  \\/_/',
    '     /\\___/           ',
    '     \\/__/            ',
  ].join('\n')
);
