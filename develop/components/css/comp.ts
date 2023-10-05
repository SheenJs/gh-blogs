const modules = import.meta.globEager('./CSSLoadings/**/*.vue');

const CSSLoadings = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  CSSLoadings.push(...modList);
});

export { CSSLoadings };
