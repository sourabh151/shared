const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const PORT = 5000;
const connectDB = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static('./public-2'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/tasks', tasks);
app.use((err, req, res, next) => {
    res.status(500).send({ msg: err.message });
})
const start = async () => {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
    );
}
start();
