'use strict';

/**
 * Use `server.js` to run your application without `$ strapi start`.
 * To start the server, run: `$ npm start`.
 *
 * This is handy in situations where the Strapi CLI is not relevant or useful.
 */

process.chdir(__dirname);

(function () {
  const strapi = require('strapi');
  strapi.on('hook:_config:loaded', () => {
    strapi.config.orm = require('./config/environments/'+process.env.NODE_ENV+'/orm');
  });
  strapi.start();
})();