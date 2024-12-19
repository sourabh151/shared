const express = require('express')
const app = express();

app.use(express.static('web'));
app.listen(1234,()=>{
  console.log(`server is listening on port 1234`);
});
