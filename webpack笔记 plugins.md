## plugins
webpack中使用plugins


### 在输出项，自动生成html入口文件

```js
plugins:[new HtmlWebpackPlugin()],
```

但是实际情况中，html内有个root根节点，怎么
在项目中比如src文件夹内，新建index.html文件，定义一个模板
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```
先安装'npm i html-webpack-plugin -D'
webpack.config.js
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

plugins:[new HtmlWebpackPlugin({
    template: './index.html'
  })],
```
这样打包后，dist目录下的index.html也会有root节点


### 使用插件，先清空打包输出的文件夹
安装clean-webpack-plugin
```npm i clean-webpack-plugin --save-dev```

```js
//引入
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

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
```