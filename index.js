const express = require('express');
const app = express();
const bodyParser = require("body-parser");


//db
const DB = require("./db");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// app.use(express.static('website'));

let data = [
    {        
        name: "Milad"
    },
    {
        name: "Ezzat"
    },
    {
        name: "Fahmy"
    },
]

app.get('/',async(req, res)=>{
    const newData = await DB.insertMany(data);
    res.send(newData)
});

const port = process.env.PORT || 3000;
const listener = ()=>{
    console.log("server running on port "+port)
}
app.listen(port, listener);
