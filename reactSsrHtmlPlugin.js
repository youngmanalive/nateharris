import HtmlWebpackPlugin from 'html-webpack-plugin';
import { rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

import React from 'react';
import ReactDomServer from 'react-dom/server';

class ReactSsrHtmlPlugin {
  constructor(options = {}) {
    this.input = options.input;
  }

  /** @param {import("webpack").Compiler} compiler */
  apply = (compiler) => {
    compiler.hooks.compilation.tap(ReactSsrHtmlPlugin.name, (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        ReactSsrHtmlPlugin.name,
        (data, callback) => {
          const log = compilation.getLogger(ReactSsrHtmlPlugin.name);

          this.getMarkup()
            .then((html) => {
              data.html = data.html.replace(
                '<div id="root">',
                (match) => match + html
              );

              log.info(`Markup generated:\n${html}`);
            })
            .catch((error) => {
              log.error('Error generating markup!');
              log.error(error);
            })
            .finally(() => {
              callback();
            });
        }
      );
    });
  };

  getMarkup = async () => {
    const bundle = await rollup({
      input: this.input,
      external: [/node_modules/],
      plugins: [
        resolve({
          extensions: ['.js', '.json'],
          moduleDirectories: ['src', 'node_modules'],
        }),
        babel({
          babelHelpers: 'bundled',
          presets: ['@babel/preset-react'],
          exclude: [/node_modules/],
        }),
        commonjs(),
      ],
    });
    const { output } = await bundle.generate({
      sourcemap: false,
      format: 'iife',
      globals: {
        react: 'React',
      },
    });
    const [{ code }] = output;
    await bundle.close();

    const { App } = eval(code);

    return ReactDomServer.renderToString(React.createElement(App));
  };
}

export default ReactSsrHtmlPlugin;
