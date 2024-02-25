const crypto = require('crypto');

const jwtSecret = crypto.randomBytes(32).toString('hex');

module.exports = {
  JWT_SECRET: jwtSecret,
  MONGO_URI: 'mongodb://localhost:27017/myapp'
};