import { VIEWS } from "../context";

export const isDev = () => process.env.NODE_ENV === 'development';

const DEFAULT_OPTIONS = {
  hidenav: true,
  view: null,
  module: null,
};

/**
 * @param {string} id
 * @param {Object} options
 * @param {boolean} [options.hidenav=true]
 * @param {string} [options.module=null]
 * @param {string} [options.view=null]
 * @return {string}
 */
export const getSandboxSrc = (id, options = {}) => {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  const query = [
    'autoresize=1',
    'fontsize=14',
    'theme=dark',
    opts.view && `view=${opts.view}`,
    opts.hidenav && 'hidenavigation=1',
    opts.module && `module=${encodeURIComponent(opts.module)}`,
  ]
    .filter(Boolean)
    .join('&');

  return `https://codesandbox.io/embed/${id}?${query}`;
};

export const trackEvent = (eventName, properties = {}) => {
  window.gtag('event', eventName, properties);
};

export const trackView = (view) => trackEvent('view', { view });

export const session = {
  getView: () => {
    try {
      const saved = sessionStorage.getItem('view') || VIEWS.main;
      const [view, projectId] = saved.split(':');
      return [view, projectId || null];
    } catch (e) {
      return [VIEWS.main, null];
    }
  },
  setView: (view, projectId) => {
    try {
      const toSave = projectId ? `${view}:${projectId}` : view;
      sessionStorage.setItem('view', toSave);
    } catch (e) {}
  },
};
