## sourceMap
sourceMap 它是一个映射关系，他知道dist目录下main.js文件的某一行
实际上对应的是src目录下index.js文件中的一行

就能知道打包后文件的错误 定位 在你开发文件下源代码的位置

它能精确到具体第几行第几列 但这样的映射很耗费性能

加个cheap,只会精确到第几行不会第几列,build的速度会快

### 在devtool里配置

```js
devtool:'source-map'   //打包后dist目录下会生成.map文件
//'inline-source-map'  打包后dist目录下不会生成.map文件，会生成base64代码写在打包后的js内
//'cheap-source-map'  只管业务代码，引入的第三方模块不映射
//'cheap-module-source-map'  不只管业务代码，业管引入的第三方模块
//'eval'              执行效率最快，通过evalJs的这种执行形式生成对应关系，不会生成.map文件 也不会生成base64代码 和其他的，比较复杂的情况下，提示可能不全面
```

### 如何配置建议
开发环境下(development)：
```js
module.export ={
  mode:'development',
  devtool:'cheap-module-eval-source-map'
}
```

生产环境下(production)，一般不配映射关系，但要是报错了，想快速定位问题:
```js
module.export ={
  mode:'production',
  devtool:'cheap-module-source-map'
}
```


### 使用 WebpackDevServer 提升开发效率
修改源代码后会自动打包
#### 方法一：
package.json
```js
"scripts": {
  "watch": "webpack --watch"
}
```
#### 方法二：
安装`npm i webpack-dev-server -D`
package.json：
```js
"scripts": {
  "start": "webpack-dev-server",
}
```
webpack.config.js：
```js
devServer:{
  contentBase:'./dist',
  open:true,                       //运行start命令后，自动帮我们打开浏览器
  port:8080,
  proxy:{                          //跨域代理
    '/api':'http://localhost:3000'
  }
}
```
比--watch好的地方，不仅会监听文件变化自动打包，还会帮我们自动刷新浏览器