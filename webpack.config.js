const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ // Tell webpack to run these rules.
            use: 'babel-loader', // name of the loader.
            test: /\.js$/ // use this loader on these types of files.
        }]
    }
};

module.exports = config;
