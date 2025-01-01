import React from 'react';
import Action from '../components/action';
import { getSandboxSrc } from '../util';

export const PROJECT_NAMES = {
  animals: 'animals',
  routeTransitions: 'route transitions',
  coffeeHelper: 'pour over helper',
  tabOS: 'tabOS',
  site: 'this website',
  bloom: 'bloom',
  flickFind: 'flick find',
  paint: 'paint',
  foodDiary: 'food diary',
  todos: 'todo list',
  ticTacToe: 'tic tac toe',
  lilStopwatch: 'lil-stopwatch',
  graphQLaravel: 'graphqlaravel',
};

export const PROJECT_TYPES = {
  codesandbox: 'codesandbox',
  repo: 'repo',
  link: 'link',
};

export default {
  [PROJECT_NAMES.site]: {
    type: PROJECT_TYPES.repo,
    description: (
      <>
        <p>
          you’re viewing it now! check out the code on{' '}
          <Action
            href="https://github.com/youngmanalive/nateharris"
            content="github"
          />
          .
        </p>
        <p>
          built in react of course, and was a fun experiment implementing a mini
          static site generator. if you inspect the page source, you will see
          that the root element is not empty. the initial content is injected at
          build time using a custom rolled{' '}
          <Action
            href="https://github.com/youngmanalive/nateharris/blob/main/reactSsrHtmlPlugin.js"
            content="webpack plugin"
          />
          .
        </p>
      </>
    ),
  },

  [PROJECT_NAMES.animals]: {
    type: PROJECT_TYPES.codesandbox,
    description: (
      <>
        <p>
          a fun dive into animations with{' '}
          <Action
            href="https://www.react-spring.dev/"
            content={'react-spring'}
          />
          !
        </p>
      </>
    ),
    data: {
      id: 'animals-s08p5',
      src: getSandboxSrc('animals-s08p5', {
        module: '/src/animals/index.js',
      }),
    },
  },

  [PROJECT_NAMES.paint]: {
    type: PROJECT_TYPES.repo,
    data: {
      href: 'https://github.com/youngmanalive/paint',
    },
    description: (
      <>
        <p>
          a paint app built with canvas, react, and mobx. the toolbar offers a
          few different options, and keyboard shortcuts also work! (ctrl+z,
          shift+ctrl+z, etc)
        </p>
        <ul>
          <li>
            <Action
              href="https://github.com/youngmanalive/paint"
              content="code"
            />
          </li>
          <li>
            <Action
              href="https://youngmanalive.github.io/paint/"
              content="demo"
            />
          </li>
        </ul>
      </>
    ),
  },

  [PROJECT_NAMES.bloom]: {
    type: PROJECT_TYPES.link,
    data: {
      href: 'https://youngmanalive.github.io/bloom/',
    },
  },

  [PROJECT_NAMES.tabOS]: {
    type: PROJECT_TYPES.repo,
    description: (
      <>
        <p>
          an experiment with draggable and resizable windows. the idea was to
          turn this into a chrome extension where new tabs contain a dashboard
          of widgets, notes, utilties, etc.
        </p>
        <p>maybe i'll finish it someday 😅🙏</p>
        <ul>
          <li>
            <Action
              href="https://github.com/youngmanalive/tab-os"
              content="code"
            />
          </li>
          <li>
            <Action
              href="https://youngmanalive.github.io/tab-os/"
              content="demo"
            />
          </li>
        </ul>
      </>
    ),
  },

  [PROJECT_NAMES.lilStopwatch]: {
    type: PROJECT_TYPES.link,
    data: {
      href: 'https://youngmanalive.github.io/lil-stopwatch/',
    },
  },

  [PROJECT_NAMES.flickFind]: {
    type: PROJECT_TYPES.link,
    data: {
      href: 'https://youngmanalive.github.io/flickfind/',
    },
  },

  [PROJECT_NAMES.coffeeHelper]: {
    type: PROJECT_TYPES.codesandbox,
    description: [
      'if you know me at all, you know i love coffee. i make pour over every morning.',
      '...so why not whip up a helper to time my pour overs just right? ☕️👌😁',
    ],
    data: {
      id: 'coffee-helper-z9gdz',
      src: getSandboxSrc('coffee-helper-z9gdz', {
        module: '/src/components/coffeeHelper.tsx',
      }),
      title: 'coffee helper',
    },
  },

  [PROJECT_NAMES.routeTransitions]: {
    type: PROJECT_TYPES.codesandbox,
    description: 'Messing around with route transitions using react-router and react transition group.',
    data: {
      id: 'icy-http-d51pn',
      src: getSandboxSrc('icy-http-d51pn', {
        hidenav: false,
        module: '/src/app.js',
      }),
    },
  },

  [PROJECT_NAMES.graphQLaravel]: {
    type: PROJECT_TYPES.link,
    data: {
      href: 'https://github.com/youngmanalive/graphqlaravel',
    },
  },

  [PROJECT_NAMES.foodDiary]: {
    type: PROJECT_TYPES.link,
    data: {
      href: 'https://github.com/youngmanalive/food-diary',
    },
  },

  [PROJECT_NAMES.todos]: {
    type: PROJECT_TYPES.link,
    data: {
      href: 'https://youngmanalive.github.io/qDo/',
    },
  },

  [PROJECT_NAMES.ticTacToe]: {
    type: PROJECT_TYPES.link,
    data: {
      href: 'https://youngmanalive.github.io/tic-tac-toe/',
    },
  },
};
