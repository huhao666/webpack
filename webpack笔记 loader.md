## loader
loader是有执行顺序的，多个loader执行,use：数组里从右到左，从下往上

### 资源文件打包配置项
url-loader与file-loader区别
url-loader会把文件转成base64 打包进js里
limit就是 小于【给定参数】的打包进js里，大于【给定参数】的打包出的还是文件的形式
[hash:7]的意思是，打包出的文件名称 是7位的hash值，如'66-7ecf3b4.jpg'
```js
rules:[{
      test:/\.(jpg|png|gif)$/,
      use:{
        loader:'url-loader',
        options:{
          name:'[name]-[hash:7].[ext]',
          outputPath:'images/',
          limit: 1024    //1024是1kb          
        }
      }
    }
```

### 给css自动加浏览器前缀 
使用postcss-loader
先安装`npm i postcss-loader -D`
```js
rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"]
    }
]
```
webpack配置文件同级目录下，定义postcss.config.js文件
```js
module.exports={
	plugins:[require('autoprefixer')]
}
```
postcss使用 autoprefixer插件,还需要在package.json 里需要添加browserslist。这个是为了确定给什么版本的浏览器起作用。不写就不会生成前缀


### css-loader常用配置项
`importLoaders:2`的意思是针对import引入额外的sass文件时，在打包时也依然走postcss-loader和sass-loader这些loader
无论是在js里引入sass 还是在sass文件里再引入其他sass，都会依次从下到上执行这些loader
```js
rules:[{
      test:/\.scss$/,
      use:[
        'style-loader',
        {
          loader:'css-loader',
          options:{
            importLoaders:2
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
```

### css模块化
options里配置`modules:true`
在模块内 单独引入css 不会对别的模块造成影响
在模块内import css文件`import style from './image.scss';`
js文件内调用 style.myclass 

```js
rules:[{
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
```

### 打包字体文件
```js
rules:[{
      test:/\.(eot|ttf|svg)$/,
      use:{
        loader:'file-loader'
      }
    }]
```

