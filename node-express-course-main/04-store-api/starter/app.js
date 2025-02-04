const express = require('express')
require("express-async-errors");
const app = express()
const router = require("./routes/products")
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const connectDB = require("./db/connect.js")

const dotenv = require("dotenv")
dotenv.config();

app.use(express.json());

app.use("/api/v1/products/", router);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, async () => {
  await connectDB(process.env.MONGO_URI);
  console.log(`server is listening on port ${process.env.PORT || 3000}`);

})
