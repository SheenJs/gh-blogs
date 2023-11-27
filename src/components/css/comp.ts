import { defineAsyncComponent, Component } from 'vue';
const modules = import.meta.glob('./CSSLoadings/**/*.vue');

const CSSLoadings: Component[] = [];

Object.keys(modules).forEach((key) => {
  CSSLoadings.push(defineAsyncComponent(modules[key]));
});

export { CSSLoadings };
