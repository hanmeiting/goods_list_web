const {
  createProxyMiddleware
} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use("/api", createProxyMiddleware({
    "target": "http://localhost:8999/",
    "secure": true,
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": ""
    },
    "cookieDomainRewrite": "http://localhost:3000/"
  }))
};