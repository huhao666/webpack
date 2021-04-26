const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode:'production',
  entry: {
    main:'./src/index.js'
  },
  devServer:{
    contentBase:'./dist',
    open:true,                       //运行start命令后，自动帮我们打开浏览器
    port:8089
  },
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
    //publicPath:'http://cdn.com.cn',
    filename : '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}