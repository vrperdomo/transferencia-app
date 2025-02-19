const PROXY_CONFIG = [
  {
    context: [
      '/api',
    ],
    target: "http://localhost:8080/",
    seccure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
    }
  }
]

module.exports = PROXY_CONFIG;