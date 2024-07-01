
module.exports = {
  devServer: {
    port: 8989,
    proxy: {
      '/sys': {
        target: 'http://localhost:10001/',
            changeOrigin: true,
        pathRewrite: {
          '^/sys': '',
        },
      },
    },
  },
}

