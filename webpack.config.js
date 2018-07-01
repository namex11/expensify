const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {

  const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
  });

  const isProduction = env === "production";

  const CSSExtract = new ExtractTextPlugin("styles.css");

  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"

        },
        {
          test: /\.s?css$/,

          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }

      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    devServer: {
      contentBase: './dist',
      historyApiFallback: true
    },

    plugins: [htmlWebpackPlugin, CSSExtract]
  }
};