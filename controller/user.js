const crypto = require("crypto");

function setPassword(password) {
  const key = "mysecret key";
  const hash = crypto.createHmac("sha512", key);
  hash.update(password);
  return hash.digest("hex");
}

function validatePassword(password) {
  const key = "mysecret key";
  const hash = crypto.createHmac("sha512", key);
  hash.update(password);
  return hash.digest("hex");
}
module.exports = { setPassword, validatePassword };
