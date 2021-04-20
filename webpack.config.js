const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode:'production',
  entry: './src/index.js',
  module:{
    rules:[{
      test:/\.(jpg|png|gif)$/,
      use:{
        loader:'url-loader',
        options:{
          name:'[name]-[hash:7].[ext]',
          outputPath:'images/',
          limit: 102400    //1024是1kb          
        }
      }
    },{
      test:/\.scss$/,
      use:[
        'style-loader',
        {
          loader:'css-loader',
          options:{
            importLoaders:2,
            modules:true
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new CleanWebpackPlugin()
  ],
  output:{
    filename : 'dist.js',
    path: path.resolve(__dirname, 'dist')
  }
}