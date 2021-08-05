# react-tailwind-env
An example of a custom bit react env with basic support for tailwindcss

Read docs about [Custom Webpack Config](https://harmony-docs.bit.dev/extending-bit/mutate-webpack-config)

See the already exported components in [https://bit.dev/shohamgilad/tailwind-test/](https://bit.dev/shohamgilad/tailwind-test/)
## requirements
This repo has recently changed to use new APIs of bit available only from version 0.0.426 or higher.

## run project
```bash
git clone https://github.com/teambit/react-tailwind-env.git
bit install
bit compile
bit install
bit start
```
## export to your own remote scope
In case you plan to use it and export components to your own remote scope, I recommend run: 
- `bit init --reset-new` to make all the components new components.
- Change the default scope, and the relevant import statements.
- Change the env aspect id in the file `components/envs/tailwind-bit/tailwind-react.aspect.ts`

## components
### tailwind-react
A custom env which extend the core react aspect and transform its webpack config to support tailwind css.
The env also define a preview runtime, which imports the `styles.css` from the `tailwind-styles` component.
See `import '@shohamgilad/tailwind-test.styles.tailwind-styles/dist/styles.css';` in `components/envs/tailwind-bit/tailwind-react.preview.runtime.tsx`

### tailwind-styles
A simple component to:
- add the core of tailwind css styles
- add custom theme for tailwind (spacing) (see `tailwind.config.js`)

### tailwind-button
A simple button component that uses the tailwind-styles component, and use some tailwind builtin classes
It's build using the tailwind-react env described above

### themed-component
A simple component that demonstrate a usage of custom theme from tailwind config