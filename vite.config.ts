import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [react(), dts({ entryRoot: "src", outDir: "dist" })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyUI",
      formats: ["es", "cjs", "umd"],
      fileName: (format) =>
        format === "es" ? "krypto-connect.js" : "krypto-connect.cjs",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
