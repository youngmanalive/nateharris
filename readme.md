## [nateharris.io](https://nateharris.io)

my personal site lives here. it started off as html with a little vanilla js. next thing you know its a custom react app that injects static markup into the html at wepack build time 😬.

### static generation
i made a simple webpack [plugin](reactSsrHtmlPlugin.js) that hooks into `HtmlWebpackPlugin` during build so we can inject markup into the html page. the plugin first needs to transpile the `App` down to runnable code (ahem, JSX!). we then take this code and execute it. we now have access to our transpiled `App` in memory and can render it to static markup.

why is this useful? beats me. otherwise i learned a thing or two and had fun doing it 😁
