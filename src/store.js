import { get, readable, writable } from "svelte/store";

export const jquery = readable({
  name: "JQuery",
  date: new Date(2006, 7, 26)
});

export const reference = (() => {
  const { subscribe, update } = writable(get(jquery));

  const set = (val) => update(old => old === val ? get(jquery) : val);

  return {
    set,
    subscribe
  }
})();

const react = {
  name: "React",
  date: new Date(2013, 4, 29),
  src: "/statics/react.png"
};

const angular = {
  name: "Angular",
  date: new Date(2010, 9, 20),
  src: "/statics/angular.png"
};

const knockout = {
  name: "Knockout",
  date: new Date(2010, 5, 5),
  src: "/statics/knockout.png"
};
const svelte = {
  name: "Svelte",
  date: new Date(2016, 10, 26),
  src: "/statics/svelte.png"
};

const vue = {
  name: "Vue",
  date: new Date(2014, 1, 1),
  src: "/statics/vue.png"
};

const backbone = {
  name: "Backbone",
  date: new Date(2010, 9, 13),
  src: "/statics/backbone.png"
};

const ember = {
  name: "Ember",
  date: new Date(2011, 11, 7),
  src: "/statics/ember.png"
};

export const libs = readable(
  [knockout, angular, react, vue, svelte, ember, backbone].sort((a, b) =>
    a.date > b.date ? 1 : -1
  )
);
