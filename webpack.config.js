const path = require('path');
const webpack = require('webpack');
const webpackLoadPlugins = require('webpack-load-plugins');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const plugins = webpackLoadPlugins();

const tslintConfig = require("./tslint.json");

module.exports = {
  entry: {
    bundle: './src/js/index.tsx',
    calculator: './src/js/calculator.tsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'dist',
    port: 8080,
    host: "0.0.0.0"
  },
  devtool: "source-map",
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', 'scss']
  },
  module: {
		preLoaders: [
			{
				test: /\.tsx?$/,
				loader: 'tslint-loader'
			}
		],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      { test: /\.html?$/,
        exclude: /node_modules/,
        loader: "file?name=[path][name].[ext]"
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new plugins.copy([
      { from: './src/index.html' },
      { from: './src/calculator.html' }
    ])
  ],
	tslint: {
		configuration: tslintConfig
	}
};
