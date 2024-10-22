// console.log('Express Tutorial');
const express = require("express");
const app = express();

const {products} = require("./data")

app.use(express.static('./tabs'))

app.get('/',(req,res)=>{
    res.status(200).send('hello brotha');
})
app.get('/api/products',(req,res)=>{
    res.status(200).json(products);
})
app.all('*',(req,res)=>{
    res.status(404).send('resource not found');
})
app.listen(5000,()=>{
    console.log("server is listening on port 5000");
})