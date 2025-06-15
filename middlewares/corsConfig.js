// middlewares/corsConfig.js

const cors = require('cors');

const corsConfig = cors({
  origin: 'https://interview-connect.vercel.app', // your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH', 'OPTIONS'], // optional, for extra clarity
});

module.exports = corsConfig;
