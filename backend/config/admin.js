module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '498ea9f11a58f3651b2b8a2f4f19f1dd'),
  },
});
