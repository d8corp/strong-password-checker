import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import {terser} from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'

const input = {
  index: 'src/index.ts',
}

export default [{
  input,
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.main.replace('index', ''),
    format: 'cjs'
  },
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext'
        },
        include: [
          'index.ts'
        ]
      }
    })
  ]
}, {
  input,
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.module.replace('index', ''),
    format: 'es'
  },
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          target: 'es6',
          module: 'esnext'
        },
        include: [
          'index.ts'
        ]
      }
    })
  ]
}, {
  input: 'src/index.ts',
  output: {
    file: 'lib/strong-password-checker.min.js',
    format: 'iife',
    name: 'strongPasswordChecker',
    plugins: [terser()]
  },
  plugins: [
    commonjs(),
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext'
        },
        include: [
          'index.ts'
        ]
      }
    })
  ]
}]
