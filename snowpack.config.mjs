// snowpack.config.mjs
import proxy from 'http2-proxy';

export default {
  routes: [
    {
      src: '/api/.*',
      dest: (req, res) => {
        // remove /api prefix (optional)


        return proxy.web(req, res, {
          hostname: 'localhost',
          port: 5000,
        });
      },
    },
  ],
};