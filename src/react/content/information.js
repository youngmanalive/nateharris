import { VIEWS } from '../context';

export const INFORMATION = [
  {
    content: 'tinkerings',
    view: VIEWS.portfolio,
    label: "check out some things i've built",
    visibility: true,
  },
  {
    content: 'github',
    href: 'https://github.com/youngmanalive',
    label: 'check out my github',
  },
  {
    content: 'linkedin',
    href: 'https://www.linkedin.com/in/nathanharris-sf/',
    label: 'check out my linkedin',
  },
  {
    content: ['nathan', 'harris.sf', '@gma', 'il.com'],
    href: ['mailto:', 'nathan', 'harris.sf', '@gma', 'il.com'],
    label: 'hit me up',
    visibility: true,
  },
].map((info) => {
  return Object.entries(info).reduce(
    (carry, [key, val]) => ({
      ...carry,
      [key]: Array.isArray(val) ? val.join('') : val,
    }),
    {}
  );
});
