const express = require('express')
const app = express();

app.use(express.static('web'));
app.listen(1234);