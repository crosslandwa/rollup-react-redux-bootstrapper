import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'

module.exports = {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.min.js',
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
    })
  ]
}
