const express = require("express");
const app = express();
const port = 3000;
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose'); 
const User = require("./models/robot");
const Robot = require("./models/user");
mongoose.connect("")
.then((result) => {  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
})
.catch((err) => {
  console.log(err);
});
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/Essam", (req, res) => {
  res.send("wellcome ♥ ");
});
app.get("/createRobot", (req, res) => {
  res.render("createRobot");
});
app.get("/createProcess", (req, res) => {
  res.render("createProcess");
});
app.get("/createMachine", (req, res) => {
  res.render("createMachine");
 
});
app.get("/createUser", (req, res) => {
  res.render("createUser");
 
});
//User
app.post("/", (req, res) => {
  // console.log(req.body);\
  const user = new User(req.body);
  user
  .save()
  .then((result)=>{
    res.render("index"); })
  .catch((err)=>{
    console.log(err)});
  });
//Robot
app.post("/createMachine", (req, res) => {
  if(req.body.attend =="on"){
    req.body.attend ="Attended";
  }else{
    req.body.attend ="Not-Attended";
  }
  if(req.body.stand == "on"){
    req.body.stand = "Standard";
  }else{
    req.body.stand = "Not-Standard";
}

});

//  404 
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});