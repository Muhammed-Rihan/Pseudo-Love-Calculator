import express from "express"
import bodyParser from "body-parser"
import { name } from "ejs";

const port = 3000;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req,res) => {
    res.render("index.ejs")
})

app.post("/love", (req, res) => {
    console.log(req.body);
    const data = req.body;
    var randomnumber = RandomNum();
    console.log(randomnumber);
    res.render("love.ejs", {data, randomnumber});
});

function RandomNum() {
    var randomnumber = Math.floor((Math.random()*100)+1);
    return randomnumber;
}

app.listen(port, () => {
    console.log(`server running on port ${3000}`);
});
