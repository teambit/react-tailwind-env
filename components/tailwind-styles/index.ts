// require('./styles.css');
const styles = require("./styles.css");
// export * as styles from './style.css';
// export * as tailwindConfig from './tailwind.config';
const tailwindConfig = require('./tailwind.config');
const tailwindConfigPath = require.resolve('./tailwind.config');

export { styles, tailwindConfig, tailwindConfigPath };