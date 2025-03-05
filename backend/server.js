const express = require("express");
const app = express();


app.use(express.json())
const Port = process.env.PORT || 9090;
const DB_url = process.env.DB_URL;


app.get("/", (req, res) => {
    res.send("My name is Sksham kaushal. I am from squad-84")
})

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`)
})