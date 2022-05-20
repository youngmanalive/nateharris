'use strict';

(function () {
  const reverse = (string) => string.split('').reverse().join('');

  const injectLinks = () => {
    [...document.querySelectorAll('[data-connect]')].forEach((el) => {
      const [content, href] = [
        reverse(el.getAttribute('data-val')),
        reverse(el.getAttribute('data-href')),
      ];

      el.removeAttribute('data-val');
      el.removeAttribute('data-href');
      el.removeAttribute('data-connect');

      el.setAttribute('href', href);
      el.innerText = content;
    });
  };

  if (document.hidden) {
    const handler = () => {
      injectLinks();
      document.removeEventListener('visibilitychange', handler);
    };

    document.addEventListener('visibilitychange', handler);
  } else {
    injectLinks();
  }
})();
