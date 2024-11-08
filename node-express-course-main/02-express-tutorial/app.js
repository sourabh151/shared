// console.log('Express Tutorial');
const express = require("express");
const http = require("http");
const fs = require("fs");
const { people } = require("./data");
const all = require("./data");
// const morgan  = require('morgan');
const app = express();
let readData;
fs.readFile("./data.js", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        readData = data;
    }
});
// app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/login", (req, res) => {
    let id = people.length;
    ++id;
    people.push({ id: id, ...req.body });
    console.log(people);
    res.send("hello");
});
app.get("/api/people", (req, res) => {
    console.log(readData.toString());
    const bracketRegex = new RegExp(/people = /g);
    res.status(200).json({ success: true, data: people });
});
app.put("/api/people/:id", (req, res) => {
    if (!req.params.id) {
        res.status(http.STATUS_CODES["modified"]).json({
            success: false,
            msg: "please provide valid id"
        });
    }
    if (!req.body.name) {
        res.json({ success: false, msg: "please provide valid name" });
    }
    const newPeople = people.map(person => {
        if (person.id === Number(req.params.id)) {
            person.name = req.body.name;
        }
        return person;
    });
    res.json({ success: true, data: newPeople });
});
app.delete("/api/people/:id", async (req, res) => {
    //res.send(req.params);
    const { id } = req.params;
    all.people = all.people.filter(function (p) {
        return !(p.id === Number(id));
    });
    //console.log(id);
    await fs.createWriteStream("data2.js").write(JSON.stringify(all));
    return res.json({
                success: true,
                message: `deleted record for person with id : ${id}`
            });
    // fs.writeFile("/data2.js", JSON.stringify(all), err => {
    //     if (err) {
    //         console.log(err);
    //         return res.status(500).json({
    //             success: false,
    //             message: `could not delete record for person with id : ${id}`
    //         });
    //     } else {
    //         return res.json({
    //             success: true,
    //             message: `deleted record for person with id : ${id}`
    //         });
    //     }
    // });

    //let reg = "\s*\{\s*"+Number(id)+"\s*:\s*\d+\s*,\s*name\s*:\s*\"\w+\"\s*}\s*,?"
});
app.listen(5000, () => {
    console.log("server is listening on port 5000");
});
