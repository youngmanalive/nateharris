import ghpages from 'gh-pages';

ghpages.publish('./dist', function(...args) {
  console.log(args);
});