const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://compete-iare-server-wefmkmqfe02392nj93.vercel.app',
      changeOrigin: true,
    })
  );
};