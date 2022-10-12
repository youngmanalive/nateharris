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
