module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '//your_url'
  //   : '/',
  publicPath: "./", // 打包应用包时的基本 URL

  outputDir: "dist", // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录

  assetsDir: "static", // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。

  filenameHashing: true, // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。

  // 当在 multi-page 模式下构建时，webpack 配置会包含不一样的插件
  // (这时会存在多个 html-webpack-plugin 和 preload-webpack-plugin 的实例)。
  // 如果你试图修改这些插件的选项，请确认运行 vue inspect。
  //   pages: {
  //     index: {
  //       // page 的入口
  //       entry: "src/pages/index/index.js",
  //       // 模板来源
  //       template: "src/pages/index/index.html",
  //       // 在 dist/index.html 的输出
  //       filename: "index.html",
  //       // 当使用 title 选项时，
  //       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //       title: "首页",
  //       // 在这个页面中包含的块，默认情况下会包含
  //       // 提取出来的通用 chunk 和 vendor chunk。
  //       chunks: ["chunk-vendors", "chunk-common", "index"]
  //     }
  //     // 当使用只有入口的字符串格式时，
  //     // 模板会被推导为 `public/subpage.html`
  //     // 并且如果找不到的话，就回退到 `public/index.html`。
  //     // 输出文件名会被推导为 `subpage.html`。
  //     // subpage: ''
  //   },

  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
  lintOnSave: true,

  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,

  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],

  // 生产环境 sourceMap
  productionSourceMap: false,

  // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
  // corsUseCredentials: false,
  // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  configureWebpack: config => {},

  // webpack 链接 API，用于生成和修改 webapck 配置
  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: config => {
    // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    config.optimization.splitChunks({
      cacheGroups: {}
    });

    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    config.module
      .rule("eslint")
      .exclude.add("/Users/maybexia/Downloads/FE/community_built-in/src/lib")
      .end();
  },

  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,

    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,

    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },

      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },

  // 所有 webpack-dev-server 的选项都支持。
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 3000,
    https: false,
    hotOnly: false,
    proxy: null,
    before: app => {}
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require("os").cpus().length > 1,

  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // 第三方插件配置
  pluginOptions: {}
};
