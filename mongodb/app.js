const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const app = express();

app.get("/", async (req, res) => {
})
app.listen(5000, async () => {
  const client = new mongodb.MongoClient("mongodb://127.0.0.1:27017/")
  const db = client.db("storeApi");
  const result = await db.collection("products").find({$and:[{price:{$gte:70}},{price:{$lte:100}}]}).toArray();
  //await mongoose.connect("mongodb://127.0.0.1:27017/");
  console.log("listening on port 5000");
  console.log(result);
})

//const { MongoClient } = require("mongodb");
//const app = express();
//let coll;
//async function connectToDB() {
//
//  const client = new MongoClient("mongodb://127.0.0.1:27017/");
//  const db = client.db("storeApi");
//  coll = db.collection("products");
//  app.listen(5000,()=>{
//    console.log("listening on port 5000")
//  });
//}
//connectToDB();
//app.get("/", async (req, res) => {
//  const result = await coll.find();
//  res.send("hello");
