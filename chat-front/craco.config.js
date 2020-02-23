const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
            styles: './src/styles',
            actions: './src/actions',
            components: './src/components',
            modules: './src/modules',
            reducers: './src/reducers',
            pages: './src/pages',
            assets: './src/assets',
            hocs: './src/hocs',
            helpers: './src/utils/helpers',
            services: './src/utils/services',
            reducers: './src/redux/reducers',
            actions: './src/redux/actions',
            creators: './src/redux/creators',
            interceptors: './src/interceptors',
        }
      }
    }
  ]
};