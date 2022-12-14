// next-auth.config.js

module.exports = {
    providers: [
      {
        provider: 'email',
        // The server and from address to use when sending email messages
        server: 'smtp.example.com',
        from: 'no-reply@example.com',
      },
    ],
  };
  