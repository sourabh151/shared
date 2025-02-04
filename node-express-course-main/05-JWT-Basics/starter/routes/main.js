const {login} = require("../controllers/main");
const {Router} = require("express");
const router = Router();
router.route("/login").post(login);

module.exports = router;