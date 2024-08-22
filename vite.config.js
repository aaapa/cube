import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";

export default defineConfig({
  plugins: [
    pugPlugin({
      pretty: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/scss/vars.scss"; @import "src/scss/fonts.scss";`,
      },
    },
  },
});