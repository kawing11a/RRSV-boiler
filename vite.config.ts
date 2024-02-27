import basicSsl from "@vitejs/plugin-basic-ssl";
import react from '@vitejs/plugin-react-swc';
import { PluginOption, UserConfig, defineConfig, loadEnv } from "vite";
import nodePolyfills from "vite-plugin-node-stdlib-browser";

const HTTPS: boolean = false;

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const cwd = process.cwd();
  const env = loadEnv(configEnv.mode, cwd, "");
  const devPlugins: PluginOption[] = [];
  const devConfig: UserConfig = {};

  if (configEnv.command == "build") {
    console.log("STATIC_ASSET_BASE_URL:", env.STATIC_ASSET_BASE_URL);
  }

  if (configEnv.command == "serve") {
    if (HTTPS) {
      devPlugins.push(basicSsl());
    }

    Object.assign(devConfig, {
      server: {
        host: "0.0.0.0",
        port: 8082,
        https: HTTPS,
        headers: {
          Expires: "0",
          Pragma: "no-cache",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Access-Control-Allow-Headers":
            "origin, x-requested-with, content-type",
          "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
      }
    });

  }

  return {
    base: env.STATIC_ASSET_BASE_URL ?? '/',
    plugins: [
      nodePolyfills(), // polyfill node.js buffer for jasonwebtoken
      react({ plugins: [["@swc/plugin-styled-components", {}]] }),

      ...devPlugins,
    ],

    build: {
      outDir: "bundle",
      assetsDir: "staticAssets",
      sourcemap: false,
      chunkSizeWarningLimit: 1024 * 20,
      rollupOptions: {
        // for production build, bundle.html is included by index.php as entry:
        input: {
          main: "bundle.html",
        },
      },
    },

    ...devConfig,
  };
});
