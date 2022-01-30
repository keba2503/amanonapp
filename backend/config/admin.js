module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c0695f3d1ac97643174e51a32d2c4145'),
  },
});
