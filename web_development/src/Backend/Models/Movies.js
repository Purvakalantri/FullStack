const mongoose=require("mongoose");

const MoviesSchema=new mongoose.Schema({
    name:String,
    rating:String,
    year:String,
    hero:String,
    heroine:String,
})
const Movies = mongoose.model("Movies",MoviesSchema);
module.exports=Movies;