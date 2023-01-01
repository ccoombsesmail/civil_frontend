import { defineConfig, loadEnv } from 'vite'
import path from 'path'
// import inject from '@rollup/plugin-inject'
// import * as stdLibBrowser from 'node-stdlib-browser'

import { createHtmlPlugin } from 'vite-plugin-html'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import svgLoader from 'vite-svg-loader'

import { dependencies } from './package.json'

const reactDeps = Object.keys(dependencies).filter((key) => key === 'react' || key.startsWith('react-') || key.startsWith('@civic')
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
        output: {
          manualChunks,
        },
        external: ['fsevents'],
      },
    },

    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          esbuildCommonjs(['@civic/solana-gateway-react', '@solana/wallet-adapter-react-ui']),
        ],
        define: {
          this: 'window',
        },
      },
    },

    server: {
      https: false,
      port: 8080,
      watch: false,
      hmr: false,
    },

    resolve: {
      alias: [
        // stdLibBrowser,
        {
          find: /^~/,
          replacement: '',
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    publicDir: './public',
    plugins: [
      viteCommonjs(),
      // eslint(),
      svgLoader(),
      createHtmlPlugin({}),
      svgr(),
      // replace({
      //   'require("@solana/wallet-adapter-react-ui/styles.css")': 'import("@solana/wallet-adapter-react-ui/styles.css")'
      // }),import default from './src/pages/CommentForm/hooks/useHandleSubmit';

      react({
        jsxRuntime: 'classic',
        include: '**/*.{jsx,tsx}',
        babel: {
          plugins: ['babel-plugin-styled-components'],
        },
      }),
      // {
      //   ...inject({
      //     global: [
      //       require.resolve(
      //         'node-stdlib-browser/helpers/esbuild/shim',
      //       ),
      //       'global',
      //     ],
      //     process: [
      //       global.require.resolve(
      //         'node-stdlib-browser/helpers/esbuild/shim',
      //       ),
      //       'process',
      //     ],
      //     Buffer: [
      //       global.require.resolve(
      //         'node-stdlib-browser/helpers/esbuild/shim',
      //       ),
      //       'Buffer',
      //     ],
      //   }),
      //   enforce: 'post',
      // },
    ],
    esbuild: {
      define: {
        this: 'window',
      },
    },
  }
})
