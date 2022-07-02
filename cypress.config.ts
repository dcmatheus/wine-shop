import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 360,
    viewportHeight: 640
  },

  component: {
    viewportWidth: 360,
    viewportHeight: 640,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
