'use strict';

const responseHandlers = require('./src/response-handlers');

module.exports = [
  'strapi::logger',
  'strapi::errors',
  // 'strapi::security',
  {
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					"connect-src": ["'self'", "https:"],
					"img-src": [
						"*",
						// "'self'",
						// "data:",
						// "blob:",
						// "dl.airtable.com",
						// "ms3.devcr.kfteausa.com",
						// "win.ovh22.kfteausa.com:9000",
						// "*.kftus.com",
						// "*.kungfutea.com",
					],
					"media-src": [
						"*",
						// "'self'",
						// "data:",
						// "blob:",
						// "dl.airtable.com",
						// "ms3.devcr.kfteausa.com",
						// "win.ovh22.kfteausa.com:9000",
						// "*.kftus.com",
						// "*.kungfutea.com",
					],
          "script-src": ["'self'", "'unsafe-inline'", "https://accounts.google.com"],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
  'strapi::cors',
  // 'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  // 'strapi::compression',
  // 'strapi::ip',
  {
    name: 'strapi::responses',
    config: {
      handlers: responseHandlers,
    },
  },
  'strapi::favicon',
  'strapi::public',
  {
    name: 'global::test-middleware',
    config: {
      foo: 'bar',
    },
  },
  {
    resolve: './src/custom/middleware.js',
    config: {},
  },
];
