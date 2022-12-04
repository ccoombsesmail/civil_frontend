import { defineConfig, loadEnv } from "vite";
import path from "path";
import replace from '@rollup/plugin-replace';
import EnvironmentPlugin from 'vite-plugin-environment'
import { replaceCodePlugin } from "vite-plugin-replace";

import { createHtmlPlugin } from "vite-plugin-html";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import svgLoader from 'vite-svg-loader'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

import { dependencies } from './package.json';

const reactDeps = Object.keys(dependencies).filter(key => key === 'react' || key.startsWith('react-') ||   key.startsWith('@civic')  ||
key.startsWith('@solana'))

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
  const env = { ...process.env, ...loadEnv(mode, __dirname, "") };

  return {
    root: "src",
    base: "/",

    build: {
      sourcemap: false,
      outDir: "../dist",
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks
        },
      },
    },
    optimizeDeps:{
      esbuildOptions: {
        plugins:[
          esbuildCommonjs(['@civic/solana-gateway-react', '@solana/wallet-adapter-react-ui']),
        ],
        define: {
          this: "window",
        },
      }
    },
    define: {
      "process.env.STRIPE_API_KEY": JSON.stringify(env.STRIPE_API_KEY),
      "process.env.API_DOMAIN": JSON.stringify(env.API_DOMAIN),
      "process.env.API_PROXY_DOMAIN": JSON.stringify(env.API_PROXY_DOMAIN),
      "process.env.SENTRY": JSON.stringify(env.SENTRY),
      "process.env.STORMKIT_ENV": JSON.stringify(env.STORMKIT_ENV),
    },

    server: {
      https: false,
      port: 8080,
    },

    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: "",
        },
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    publicDir: "./public",
    plugins: [      
      viteCommonjs(),
      svgLoader(),
      createHtmlPlugin({}),
      svgr(),
      // replace({
      //   'require("@solana/wallet-adapter-react-ui/styles.css")': 'import("@solana/wallet-adapter-react-ui/styles.css")'
      // }),
      react({
        jsxRuntime: 'classic',
        include: "**/*.{jsx,tsx}",
        babel: {
          plugins: ['babel-plugin-styled-components'],
        },
      }),
    ],
    esbuild: {
      define: {
        this: "window",
      },
    },
  };
});