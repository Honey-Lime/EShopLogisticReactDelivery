import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "client.js"),
      name: "EShopLogisticReact",
      formats: ["es", "cjs"],
      fileName: (format) =>
        format === "es"
          ? "eshoplogistic-react.es.js"
          : "eshoplogistic-react.cjs",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
