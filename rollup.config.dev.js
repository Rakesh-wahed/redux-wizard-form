import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';

export default {
  input: './src/demo/index.js',
  output: {
    file: './demo/bundle.js',
    format: 'iife'
  },
  exports: 'named',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelrc: true
    }),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      browser: true,
      main: true
    }),
    serve('demo')
  ],
  sourcemap: true
};
