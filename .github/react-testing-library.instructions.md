---
applyTo: "packages/react/testing-library/src/**"
---

When using `@preact/signals` in ReactLynx testing-library tests, read `.value` in JSX so signal changes rerender through the ReactLynx snapshot pipeline. Do not pass a Signal object directly as a JSX child: that optimization mutates a browser text node directly and does not update the Lynx element tree.
