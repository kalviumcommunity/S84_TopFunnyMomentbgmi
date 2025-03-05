const express = require("express");
const app = express();
const connectToDb = require('./database/db')
require('dotenv').config();

app.use(express.json())
const Port = process.env.PORT || 9090;
const DB_url = process.env.DB_URL;

app.get("/", (req, res) => {
    res.send("My name is Sksham kaushal. I am from squad-84")
})



app.listen(Port, async() => {
    try{
        connectToDb(DB_url)
        console.log(`connected to database successfully`)

        console.log(`Server is running on port http://localhost:${Port}`)
    }catch(err){
        console.log(err);
    }

})