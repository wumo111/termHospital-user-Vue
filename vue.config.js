
module.exports = {
  devServer: {
    port: 8989,
    proxy: {
      '/sys': {
        target: 'http://localhost:8083',
            changeOrigin: true,
        pathRewrite: {
          '^/sys': '',
        },
      },
    },
  },
}

