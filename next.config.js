const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /html-react-parser\/index\.js$/,
        resolve: {
          alias: {
            'html-dom-parser': path.join(path.dirname(require.resolve('html-dom-parser')), 'lib/server/html-to-dom.js'),
          },
        },
      },
    ];
    return config;
  },
}
