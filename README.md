# vue-multiplePage

> vue多页面配置方案（研究时为了重构公司官网）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8180
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

可自定义配置pages文件夹，需要和config中moduleName配置项保持一致，目前入口只支持pages/**/**.js形式，层级多或者少都会报错，有意者可自行修改util中的entry配置，不当之处还请指教设计方式，微信：sxc516441839

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
