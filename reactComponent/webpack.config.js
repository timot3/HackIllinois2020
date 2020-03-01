var path = require('path');

module.exports = {
    mode: 'production',
    entry: './home.js',
    output: {
        path: path.resolve('lib'),
        filename: 'volunteerConnectAll.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}