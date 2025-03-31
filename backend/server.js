const express = require("express");
const { connect } = require("mongoose");
const connectToDb = require("./database/db");
const RouteMoment = require('./routes/routes');
const cors=require('cors');

const app = express();
require('dotenv').config();
const Port = process.env.PORT || 9090;
const DB_url = process.env.DB_URL;

app.use(cors());
app.get("/", (req, res) => {
    res.send("<h2> My name is SKSHAM. I am from squad-84 </h2>")
})

app.use('/', RouteMoment);
app.listen(Port, async() => {
    try{
        await connectToDb(DB_url);
        console.log(`Server is running on port http://localhost:${Port}`);
        console.log(`Successfully connected to database with url as ${DB_url}`);
    }
    catch(err){
        console.log(err);
    }
});