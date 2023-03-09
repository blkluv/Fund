import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    },
  },
  define: {
    global: "globalThis",
    "process.env": {},
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  terserOptions: {
    compress: {
      drop_console: true,
      ecma: 2015,
      keep_infinity: true,
      passes: 3,
      unsafe: true,
      unsafe_arrows: true,
      unsafe_comps: true,
      unsafe_Function: true,
      unsafe_math: true,
      unsafe_methods: true,
      unsafe_proto: true,
      unsafe_regexp: true,
      unsafe_symbols: true,
      unsafe_undefined: true,
    },
  },
  treeshake: true,
});
