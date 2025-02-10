const {getAllJobs,postJob, deleteJob} = require("../controllers/jobs");
const {Router} = require("express");

const router = Router();

router.get("/",getAllJobs);
router.post("/",postJob);
router.delete("/",deleteJob)

module.exports = router