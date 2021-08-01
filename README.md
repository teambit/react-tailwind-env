# react-tailwind-env
An example of a custom bit react env with basic support for tailwindcss

Read docs about [Custom Webpack Config](https://harmony-docs.bit.dev/extending-bit/mutate-webpack-config)

See the already exported components in [https://bit.dev/shohamgilad/tailwind-test/](https://bit.dev/shohamgilad/tailwind-test/)
## requirements
This repo has recently changed to use new APIs of bit available only from version 0.0.426 or higher.

## components
### tailwind-react
A custom env which extend the core react aspect and transform its webpack config to support tailwind css.

### tailwind-styles
A simple component to:
- add the core of tailwind css styles
- add custom theme for tailwind (spacing) (see `tailwind.config.js`)

### tailwind-button
A simple button component that uses the tailwind-styles component, and use some tailwind builtin classes
It's build using the tailwind-react env described above

### tailwind-button
A simple component that demonstrate a usage of custom theme from tailwind config