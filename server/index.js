const express = require("express");
const cors = require("cors");

const bodyParser = require('body-parser');
const db = require("./database.js");
const md5 = require("md5");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.listen(port, () =>
    console.log("Boo")
);

app.get("/", (req, res) => {
    res.send({exampleMessage: "I have received the Get request!"});
});

app.post("/submit", (req, res, next) => {
    console.log("Got posted.");
    console.log(req.body);
    let errors = [];
    if (!req.body.email) {
        errors.push("No password specified.");
    }
    if (errors.length) {
        res.status(400).json({"error": errors.join(",")});
        return;
    }
    let data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        description: req.body.description
    }
    let sql = 'INSERT INTO submission (name, email, phone, description) VALUES (?,?,?,?)';
    let params = [data.name, data.email, data.phone, data.description]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id": this.lastID
        })
    });
});

app.get("/submissions", (req, res, next) => {
    let sql = "select * from submission";
    let params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});