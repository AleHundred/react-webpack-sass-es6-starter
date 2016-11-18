var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loaders: ['react-hot/webpack', 'babel?presets[]=es2015,presets[]=react,plugins[]=transform-runtime'],
        include: path.resolve(__dirname, "src"),
      },
  		{
  			test: /\.scss$/,
  			loaders: ["style", "css", "sass"]
  		}
    ]
  },
  output: {
    filename: './js/bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index' // Your appʼs entry point
  ],
  watch: true,
  colors: true,
  progress: true
};



