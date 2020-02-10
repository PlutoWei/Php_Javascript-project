const decodeHelper = require("../helper/decode.helper");
const User = require("../models/user");
module.exports = (req, res, next) => {
  try {
    const decoded = decodeHelper(req);
    console.log(decoded);
    if (decoded && decoded.role == "customer") {
      User.findOne({ _id: decoded.sub }, function(err, data) {
        if (err) {
          return err.message;
        }
        console.log(data);
        req.user = data;
      });
      // get user data and save it in req.user
      // console.log(decoded.sub);
      // return res.send("Authenticated");
      return next();
    }
    throw new Error("Unauthorized");
  } catch (err) {
    res.send(err.message);
  }
};
