module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4ae0d3477773ef1aa633e1b7631b8e81'),
  },
});
