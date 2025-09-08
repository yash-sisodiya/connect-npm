import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [react(), dts({ entryRoot: "src", outDir: "dist" })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "KryptosConnect",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => {
        if (format === "es") return "kryptos-connect.js"; // ESM
        if (format === "cjs") return "kryptos-connect.cjs.js"; // CommonJS
        if (format === "umd") return "kryptos-connect.umd.js"; // UMD
        return `kryptos-connect.${format}.js`; // fallback
      },
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        exports: "named",
        name: "KryptosConnect",
        extend: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
