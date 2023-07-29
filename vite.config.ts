import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import analyze from "rollup-plugin-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    analyze({
      limit: 10,
      summaryOnly: true,
    }),
  ],
});
