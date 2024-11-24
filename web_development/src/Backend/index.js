const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const Movies = require("./Models/Movies");
// const Student = require("./Models/Student");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://Purvakalantri:xOPFjugL1MRKXVVa@maratha.0vvnh.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
  res.send('Hello Everyone!');
});
//movies data
app.post("/postmovie",async(req,res)=>{
  try{
    const newData=new Movies(req.body);
    await newData.save();
    res.status(201).json(newData);
  }
  catch(err){
    console.error("Erroe creating movie data:",err);
    res.status(500).send("Internal server Error");
  }
});

app.get("/getmovies",async(req,res)=>{
  try{
    const newData =await Movies.find({});
    res.status(200).json(newData);
    console.log(res.body);

  }
  catch(error){
    res.send(500).send("Error occured");
  }
});

//students data
/*app.post("/poststudent",async(req,res)=>{
  try{
    const newData=new Student(req.body);
    await newData.save();
    res.status(201).json(newData);
  }
  catch(err){
    console.error("Erroe creating movie data:",err);
    res.status(500).send("Internal server Error");
  }
});

app.patch("/updatestudent",async(req,res)=>{
  try{
    const stdname=req.params.dictionary;
    const updated_roll_no=req.body.roll_no;

    const newData=await Student.updateOne({name:stdname},{$set:{roll_no:updated_roll_no}});
    // res.status(200).json(newData);
    // console.log(res.body);

    if(newData.nModified === 0){
      return res.ststus(404).send("Error in finding roll_no");
    }

    res.status(200).send("student rollno updated successfully");

  }
  catch(error){
    res.send(500).send("Erroe occured");
  }
});

app.get("/getstudent",async(req,res)=>{
  try{
    const newData =await Student.find({});
    res.status(200).json(newData);
    console.log(res.body);

  }
  catch(error){
    res.send(500).send("Error occured");
  }
});
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
