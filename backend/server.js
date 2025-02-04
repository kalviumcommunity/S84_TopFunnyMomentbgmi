const express = require("express");
const app = express();

const PORT =3000 ;

app.get("/", (req, res) => {
    res.send("My name is Sksham kaushal. I am from squad-84")
})

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`)
})