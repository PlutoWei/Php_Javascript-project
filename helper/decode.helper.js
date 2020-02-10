const jwt = require('jsonwebtoken');
const { secret } = require('../config/main')

module.exports  = req => {
  const {
    headers: { authorization }
  } = req;
  console.log(authorization)

  if (authorization && authorization.split(" ")[0] === "Bearer") {
    return jwt.verify(authorization.split(" ")[1], secret);
  }
  return null;
};