var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
    	{ test: /\.jsx?$/, loader: "babel-loader", include: path.resolve(__dirname, "src"), query: { plugins: ['transform-runtime'], presets: ['es2015', 'react']}},
		{
			test: /\.scss$/,
			loaders: ["style", "css", "sass"],
			include: [
			  path.resolve(__dirname, "scss"),
			]
		}
    ]
  },
  output: {
    filename: './js/bundle.js'
  },
  entry: [
    './src/index.js'
  ],
  watch: true,
  colors: true,
  progress: true
};