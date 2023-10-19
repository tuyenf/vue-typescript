const { defineConfig } = require('@vue/cli-service')
const _ = require('lodash')

// noinspection AllyPlainJsInspection
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/styles.scss";`,
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Vue Typescript'
      return args
    })
  },
  devServer: {
    port: process.env.VUE_APP_PUBLIC_PORT,
  },
})
