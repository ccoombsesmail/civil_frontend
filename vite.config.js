/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import fs from 'fs'
import { replaceCodePlugin } from 'vite-plugin-replace'
import babel from '@rollup/plugin-babel'
import { createHtmlPlugin } from 'vite-plugin-html'
import { dependencies } from './package.json'

export default defineConfig({
  root: 'src',
  base: '/',
  publicDir: './public',
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        esbuildCommonjs(['@civic/solana-gateway-react', '@solana/wallet-adapter-react-ui']),
        // NodeGlobalsPolyfillPlugin({
        //   process: true,
        //   // buffer: true,
        // }),
        NodeModulesPolyfillPlugin(),
      ],
      define: {
        this: 'window',
        // global: '{}'
      },
    },
  },
  plugins: [
    viteCompression({}),
    visualizer(),
    viteCommonjs(),
    createHtmlPlugin({}),
    babel({
      babelHelpers: 'bundled',
      babelrc: false,
      configFile: false,
      exclude: '/**/node_modules/**',
      extensions: ['jsx', 'js', 'ts', 'tsx', 'mjs'],
      plugins: [
        '@babel/plugin-transform-flow-strip-types',
      ],
      presets: ['@babel/preset-react'],
    }),
    react({
      jsxRuntime: 'classic',
      include: '**/*.{jsx,tsx}',
      babel: {
        presets: ['@babel/preset-react'],
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
  resolve: {
    // alias: moduleResolution,
  },
  build: {
    outDir: '../dist',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
    },
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     toplevel: true,
    //   },
    // },
  },
  server: {
    https: false,
    port: 8000,
    watch: true,
    hmr: true,
  },
})
