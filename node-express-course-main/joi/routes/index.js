const express = require("express")
const router = express.Router();

router.all("/", (req, res, next) => {
  res.json({
    status: "OK",
    method: req.method,
  })
})

module.exports = router;
