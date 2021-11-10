const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/main.js',

      }, 
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets'),
        clean: true
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
            // Order is last to first
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, 
                'postcss-loader'
            ],
          },
          {
          test: /\.(png|jpe?g|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]'
                }
              }
            ]
          }
        ],
      }

};
