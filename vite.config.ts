/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dns from "dns";
import { checker } from "vite-plugin-checker";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    watch: false,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "./runtimeConfig", replacement: "./runtimeConfig.browser" },
    ],
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000/",
        changeOrigin: true,
        secure: false,
        rewrite: (pathname) => pathname.replace("127.0.0.1", "localhost"),
      },
    },
    cors: false,
  },
});
