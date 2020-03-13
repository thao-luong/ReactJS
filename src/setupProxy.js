const proxy = require('http-proxy-middleware');

module.exports = function (app) {
     app.use(proxy("/gdc", {
         "changeOrigin": true,
         "cookieDomainRewrite": "localhost",
         "secure": false,
         "target": "https://staging3.intgdc.com",
         "headers": {
             "host": "staging3.intgdc.com",
             "origin": null
         },
         "onProxyReq": function(proxyReq, req, res) {
             proxyReq.setHeader('accept-encoding', 'identity')
         }
     }));
     app.use(proxy("/*.html", {
         "changeOrigin": true,
         "secure": false,
         "target": "https://staging3.intgdc.com"
     }));
     app.use(proxy("/packages/*.{js,css}", {
         "changeOrigin": true,
         "secure": false,
         "target": "https://staging3.intgdc.com"
     }));
 };