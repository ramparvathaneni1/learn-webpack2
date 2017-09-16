# Udemy - Webpack 2: The Complete Developer's Guide
## By Stephen Grider

Completed examples: https://github.com/StephenGrider/WebpackCasts

### Problem
When code is organized in small modules, it is easy to manage but there are some problems.
 - Load order
 - Many JS files and loading over HTTP --> many HTTP request --> takes time to load, especially on mobile platforms.
    Less files to load --> takes less time to load --> usually better performance.

### Webpack helps to resolve these problems.
Webpack bundles our many JS files and budles them into single/fewer JS files.
 - It deals with load order.
 - It provides one/less JS file(s), so load times are better.

### Module Systems in use in the JS World
 - CommonJS
    - Used in Node Apps
    - `require`
    - `module.exports`
 - AMD
    - Async Module Definition
    - Used in Front End Apps
    - `define`
    - `require`
 - ES2015
    - Where the modern web dev is heading.
    - `export`
    - `import`
This tutorial is using CommonJS module system.

---

`webpack.config.js` helps us configure how Webpack should work.

`entry` property in config file is the file which does not have any exports. It only imports other files.
Here, `index.js` is the `entry` file.

### Points to be noted
 - `output.path` should be a fully-qualified path; not a relative path like `entry` property.
 - We use a `path` from Node JS to provide the `output.path`.
    We call `path.resolve()` to get the actual path.
 - In Node JS `__dirname` (double underscore) means current working directory.
 - `__dirname` is a constant in NodeJS.
 - **loaders** are individual libraries used to enchance Webpack.
    E.g.: `babel-loader`
 - **loaders** can be used to process various types of files.

### Babel
 - Converts ES2015 (ES6) code to ES5 code that runs in all browsers.
 - Needs 3 modules
    - `babel-loader` teaches Babel how to work with Webpack.
    - `babel-core` to read code, parse it and generate output files.
    - `babel-preset-env` is the ruleset for tellign Babel what pieces of ES6 code to look for and how to convert to ES5 code.

