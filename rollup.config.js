import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import html from '@rollup/plugin-html'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'

const bundleFileName = 'bundle.min.js'

module.exports = {
  input: 'src/main.js',
  output: {
    file: `dist/${bundleFileName}`,
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      babelHelpers: 'runtime',
      skipPreflightCheck: true // this is needed to prevent a rollup/babel config issue where the addition of plugin-transform-runtime as a plugin in babel.config.js is ignored by rollup
    }),
    resolve(),
    commonjs(),
    postcss({
      extensions: ['.css']
    }),
    html({
      template: () => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rollup-React-Redux bootstrapper</title>
  </head>
  <body>
    <div id="app"></div>
    <script src='${bundleFileName}'></script>
  </body>
</html>
`
    })
  ]
}
