const { override, useBabelRc, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
    useBabelRc(),
    addWebpackModuleRule({
        test: /\.sass$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'sass-loader',
            },
        ],
    })
);