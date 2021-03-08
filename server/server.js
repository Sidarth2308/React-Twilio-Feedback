require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const client = require("twilio")(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
const uniqid = require('uniqid');
const logger = require("morgan");
const TinyURL = require('tinyurl');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(logger("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get("/",(req,res)=>{
    
    res.send(`Hello, Server running at port ${PORT}`);
})

app.post("/sendmessage", (req,res)=>{
    const number = req.body.countryCode + req.body.number;
    console.log(req.body);
    TinyURL.shorten(req.body.origin+"/feedback", (result, err)=>{
        const shortUrl = result;
        client.messages.create({
            to : number,
            from : "+12564747052",
            body : `Thank you ${req.body.name} for using our service. Please help us with your valuable feedback :${shortUrl}  Customer ID : ${uniqid()}`
        })
            .then(message => {
                console.log(`Message SID ${message.sid}`);
                res.send({status :1, message : message.sid});
            })
            .catch(error=>{res.send({status : 0, message : error})})
    });
})
app.post("/completefeedback", (req,res)=>{
    console.log(req.body);
    res.send({status: 1 , message : "Completed"})
})

app.listen(PORT, ()=>{console.log(`Server running at port ${PORT}`)});