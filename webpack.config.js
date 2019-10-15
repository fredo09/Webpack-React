const path = require('path');

module.exports = {
  entry: './components/index.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'[name].js'
 },
 module:{
 	rules:[{
 		test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
 	}]
 }
}
