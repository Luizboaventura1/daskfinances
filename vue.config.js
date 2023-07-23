const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        sassOptions: {
          // Aqui você pode configurar opções adicionais do Sass, se necessário
        },
      },
    },
  },

  publicPath: '/'
})


