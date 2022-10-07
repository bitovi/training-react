import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "training-react",
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@utilities",
        replacement: resolve(__dirname, "/src/utilities"),
      },
    ],
  },
});
