console.log('Express Tutorial');
const express = require("express");
const app = express();
app.use(express.static('./navbar-app'))

app.get('/',(req,res)=>{
    res.status(200).send('hello brotha');
})
app.all('*',(req,res)=>{
    res.status(404).send('resource not found');
})
app.listen(5000,()=>{
    console.log("server is listening on port 5000");
})