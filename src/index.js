import App from "./App.svelte";

document.addEventListener("DOMContentLoaded", () => {
  new App({
    target: document.querySelector("wrapper")
  });
});
