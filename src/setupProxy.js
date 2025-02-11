const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://compete-iare-server-wefmkmqfe02392nj93.vercel.app',  // 🔄 Target backend server
      changeOrigin: true,
      secure: false,  // ❗ Set to `false` if using self-signed SSL
      pathRewrite: { '^/api': '' },  // 🚀 Rewrite `/api` to `/`
      logLevel: 'debug',  // 🛠️ Enable debugging logs
    })
  );
};
