import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import inject from '@rollup/plugin-inject'
// import * as stdLibBrowser from 'node-stdlib-browser'
import nodePolyfills from 'rollup-plugin-polyfill-node'

import { NodeGlobalsPolyfillPlugin,  } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import fs from 'fs';
import babel from '@rollup/plugin-babel';

import { createHtmlPlugin } from 'vite-plugin-html'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import svgLoader from 'vite-svg-loader'

import { dependencies } from './package.json'


const reactDeps = Object.keys(dependencies).filter((key) => key === 'react' || key.startsWith('react-')
|| key.startsWith('@solana') || key.startsWith('styled'))

const manualChunks = {
  vendor: reactDeps,
  ...Object.keys(dependencies).reduce((chunks, name) => {
    if (!reactDeps.includes(name)) {
      chunks[name] = [name]
    }
    return chunks
  }, {}),
}

export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, __dirname, '') }

  return {
    root: 'src',
    base: '/',

    build: {
      sourcemap: false,
      outDir: '../dist',
      minify: false,
      cssCodeSplit: false,
      rollupOptions: {
        plugins: [
          inject(({ Buffer: ['Buffer', 'Buffer'], process: 'process'})),
          nodePolyfills(),
        ],
        output: {
          manualChunks,
        },
        external: ['fsevents', 'bigint-buffer', "Buffer"],
      },
    },

    
    optimizeDeps: {
      
      esbuildOptions: {
        plugins: [
          esbuildCommonjs(['@civic/solana-gateway-react', '@solana/wallet-adapter-react-ui']),
          NodeGlobalsPolyfillPlugin({
            process: true,
            // buffer: true,
          }),
          NodeModulesPolyfillPlugin()     
        ],
        define: {
          this: 'window',
          // global: '{}'
        },
      },
    },

    server: {
      https: false,
      port: 8080,
      watch: true,
      hmr: true,
    },

    resolve: {
      alias: {
        // process: "process/browser",
        stream: "stream-browserify",
        zlib: "browserify-zlib",
        util: "util",
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    publicDir: './public',
    plugins: [
      viteCommonjs(),
      // eslint(),
      svgLoader(),
      createHtmlPlugin({}),
      svgr(),
      react({
        // jsxRuntime: 'classic',
        include: '**/*.{jsx,tsx}',
       
        babel: {
    
"presets": [
  ["@babel/preset-react", {
  "runtime": "automatic",
  "development": true,
  "importSource": "@welldone-software/why-did-you-render"
}]
],
          plugins: ['babel-plugin-styled-components'],
        },
      }),
    ],
    esbuild: {
      define: {
        this: 'window',
      },
    },
  }
})
