import livereload from "rollup-plugin-livereload";
import svelte from "rollup-plugin-svelte";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "./src/index.js",
  output: {
    file: "./public/statics/bundle.js",
    format: "iife"
  },
  treeshake: true,
  plugins: [
    replace({
      __GITHUBREPO__: pkg.repository.url
    }),
    resolve({
      extensions: [".js", ".mjs", ".svelte"]
    }),
    svelte({
      css: css => {
        css.write("./public/statics/bundle.css", false);
      }
    }),
    terser(),
    livereload()
  ]
};
