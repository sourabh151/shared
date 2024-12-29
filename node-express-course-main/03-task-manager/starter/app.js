const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;


app.use(express.static('./public'));
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
