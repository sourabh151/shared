const express = require("express");
const app = express();
const router = require("./routes");
const morgan = require("morgan")
const logger = morgan;

app.use(logger)
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(router)

app.listen(5000,()=>{
  console.log("app is listening on port 5000...")
})
