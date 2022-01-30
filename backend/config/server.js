module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://amanonweb.com',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
