const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/dewan', {
      target: 'http://sms.dewanict.com', // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/dewan": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}