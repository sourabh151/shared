const User = require("../models/UserSchema");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../errors/customError");

async function authorize(req, res, next) {
  const token = req.get("Authorization").split(" ")[1];
  const userId = jwt.verify(token, process.env.SECRET_KEY)
  if (!userId || !mongoose.isValidObjectId(userId))
    throw new UnauthorizedError("Invalid Token Provided")
  req.user = await User.findById(userId)
  if (!req.user)
    throw new UnauthorizedError("Invalid token provided")
  next()
}

module.exports = authorize
