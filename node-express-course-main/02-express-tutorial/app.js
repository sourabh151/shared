// console.log('Express Tutorial');
const express = require("express");
const http = require('http');
const {people} = require('./data');
// const morgan  = require('morgan');
const app = express();

// app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.post('/login',(req,res)=>{
    let id = people.length;
    ++id;
    people.push({id:id,...req.body});
    console.log(people);
    res.send('hello');
})
app.put('/api/people/:id',(req,res)=>{
    if(!req.params.id){
        res.status(http.STATUS_CODES["modified"]).json({"success":false,"msg":"please provide valid id"});
    }
    if(!req.body.name){
        res.json({"success":false,"msg":"please provide valid name"});
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(req.params.id)){
            person.name = req.body.name;
        }
        return person;
    });
    res.json({"success":true,data:newPeople});
})
app.listen(5000,()=>{
    console.log("server is listening on port 5000");
})
