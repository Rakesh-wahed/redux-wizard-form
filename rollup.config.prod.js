import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import packageJson from './package.json';

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs'
    },
    {
      file: './dist/es.js',
      format: 'es'
    },
    {
      file: './dist/amd.js',
      format: 'amd'
    }
  ],
  exports: 'named',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelrc: true
    }),
    commonjs(),
    resolve({
      extensions: ['.js', '.jsx'],
      browser: true,
      main: true
    }),
    uglify()
  ],
  external: Object.keys(packageJson.dependencies)
};
