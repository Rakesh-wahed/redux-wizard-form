import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'cjs'
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
      extensions: ['.js', '.jsx'],
      main: true
    })
  ],
  sourcemap: true
};
