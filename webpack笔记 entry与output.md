## entery与output
项目的输入与输出项配置

### 如果想打包生成多个js输出

原代码：输出一个dist.js
```js
entry: './src/index.js',
output:{
  filename : 'dist.js',
  path: path.resolve(__dirname, 'dist')
}
```

修改后
```js
//输出项 dist.js 可以修改占位符name（生成的js名字对应入口文件的key值），或者hash
//如下打包后生成两个js：mian.js sub.js
entry: {
  main:'./src/index.js',
  sub:'./src/index.js'
},
output:{
  filename : '[name].js',
  path: path.resolve(__dirname, 'dist')
}
```

### 给index引入的js加前缀
比如配置cdn
在output里配置publicPath
```js
output:{
  publicPath:'http://cdn.com.cn',
  filename : '[name].js',
  path: path.resolve(__dirname, 'dist')
}
```