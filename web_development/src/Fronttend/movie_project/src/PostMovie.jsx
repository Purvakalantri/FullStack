import React, { useState } from "react";
import axios from "axios";

function GetMovie(){
    const[name,getmovie]=useState(null);
    const[rating,getrating]=useState(null);
    const[year,getyear]=useState(null);
    const[hero,gethero]=useState(null);
    const[heroine,getheroine]=useState(null);
    const[result,getresult]=useState(null);

    const addmoviedata=async(e)=>{
        //var a=m+" "+r+" "+y+" "+" "+hr+" "+he;//this will show data in front end
        console.log(name+rating+year+hero+heroine); //console will add data to backend and check the console printed statement in console
        //getresult(a);
        try{
            const response = await axios.post('http://localhost:3000/postmovie',
            {
                name,
                rating,
                year,
                hero,
                heroine
            }
            );
            alert("Data stored successfully")
            console.log(response.data);

        }catch(error){
            console.error(error);
        }
        
    }
    // const getmoviedata=async(e)=>{
        
    // }


    return(
        <>
        <h1>Movie Data Form</h1>
        <div>Get movie</div>
        <form>

            <input type="text" onChange={(e)=>getmovie(e.target.value)} placeholder="Enter movie name"/><br></br>
            <input type="text" onChange={(e)=>getrating(e.target.value)} placeholder="Enter movie rating"/><br></br>
            <input type="text" onChange={(e)=>getyear(e.target.value)} placeholder="Enter movie year"/><br></br>
            <input type="text" onChange={(e)=>gethero(e.target.value)} placeholder="Enter movie hero"/><br></br>
            <input type="text" onChange={(e)=>getheroine(e.target.value)} placeholder="Enter movie heroine"/><br></br>
            <input type="button" onClick={addmoviedata} value="Add movie data"/>
            {/* <input type="button" onClick={getmoviedata} value="Get movie data"/> */}
            <h3>{result}</h3>
            {/* <h3>{result}</h3> */}
        </form>
        </>
    )
    
}

export default GetMovie