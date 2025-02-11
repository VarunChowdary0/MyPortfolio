const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://compete-iare-server-wefmkmqfe02392nj93.vercel.app',
      changeOrigin: true,
      secure: false,  // Ignore SSL issues
      pathRewrite: { '^/api': '' },  // Remove '/api' prefix before sending to backend
      logLevel: 'debug',  // Debugging logs
    })
  );
};
