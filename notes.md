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
    -- Used in Node Apps
    -- `require`
    -- `module.exports`
 - AMD
    -- Async Module Definition
    -- Used in Front End Apps
    -- `define`
    -- `require`
 - ES2015
    -- Where the modern web dev is heading.
    -- `export`
    -- `import`
This tutorial is using CommonJS module system.

