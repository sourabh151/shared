const express = require("express");
const app = express();
let PORT = process.env.PORT || 5000;
app.use(express.static("./"));

app.listen(PORT,()=>{
  console.log(`server listening on port : ${PORT}`);
});

