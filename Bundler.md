<h1 align="center">
  打包相关
</h1>

## 目录

- [Webpack](#Webpack)
- [Gulp](#Gulp)
- [Rollup](#Rollup)

## Webpack

- [官网](https://webpack.js.org)
- [中文网](https://www.webpackjs.com)

### 相关库

* [webpack-chain](https://github.com/neutrinojs/webpack-chain) 提供链式API，用来简化webpack配置的生成和修改 推荐学习

### 社区插件

* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

## Gulp

- [官网](https://gulpjs.com)
- [中文网](https://www.gulpjs.com.cn)

### 社区插件

* [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)

## Rollup

- [官网](https://rollupjs.org/guide/en/)

### 基于rollup的库

- [bili](https://github.com/egoist/bili) 一个基于rollup的零配置打包库
- [pansy](https://github.com/walrus-plus/pansy) 基于`bili`的代码，做些特定化需求，支持`bili`的所有功能
- [father](https://github.com/umijs/father) 基于rollup、babel的打包库，支持文档(`docz`、`storybook`)输出
- [father-build](https://github.com/umijs/father/tree/master/packages/father-build) father的打包功能库，如无文档需求可使用

### 官方插件

- [@rollup/plugin-buble](https://github.com/rollup/plugins/tree/master/packages/buble) 使用Bublé编译器转换ES2015 +代码
- [@rollup/plugin-alias](https://github.com/rollup/plugins/tree/master/packages/alias) 定义别名
- [@rollup/plugin-beep](https://github.com/rollup/plugins/tree/master/packages/beep) 构建发生错误时发出蜂鸣声
- [@rollup/plugin-dsv](https://github.com/rollup/plugins/tree/master/packages/dsv) 
- [@rollup/plugin-replace](https://github.com/rollup/plugins/tree/master/packages/replace) 替换文件中的字符串
- [@rollup/plugin-strip](https://github.com/rollup/plugins/tree/master/packages/strip) 代码中删除语句 一般用来删除 `console.log`, `alert`
- [@rollup/plugin-wasm](https://github.com/rollup/plugins/tree/master/packages/wasm)
- [rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel)
- [rollup-plugin-typescript](https://github.com/rollup/rollup-plugin-typescript) 支持编译typescript

### 社区插件

- [rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2) 支持编译typescript 推荐
