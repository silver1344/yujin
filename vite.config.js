import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  //build 시에 모든 console.log를 제거
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_debugger: true,
      },
    },
  },
});
