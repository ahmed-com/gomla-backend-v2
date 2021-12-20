module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8914c1cf91f077ff8f46237b2ecd3129'),
  },
});
