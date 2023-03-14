const express = require("express");

const mongoose = require("mongoose");

const app = express(); //  Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application). It's something like you are creating an object of a class. Where "express()" is just like class and app is it's newly created object.

//routes
app.get("/",(req,res) => {
        res.send("GET request called");
});

const uri = "mongodb+srv://ggudla172:udaysaimongodb@mycluster1.uutv2gl.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try{
        await mongoose.connect(uri);
        console.log("Connected to Mongodb");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000");
});