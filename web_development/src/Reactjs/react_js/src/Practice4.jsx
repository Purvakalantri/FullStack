import React, { useState } from "react";
import underweight from "./underweight.jpeg";
import overweight from "./overweight.jpeg";
import normalweight from "./normalweight.jpeg";
import obese from "./obese.jpeg";

//BMI calculator- Body mass indicator

function Practice4(){
    const[wt,setwt]=useState(0);
    const[ht,setht]=useState(0);
    const[ans,setans]=useState(0);
    const[image,setImage]=useState(null);

    const predictor=()=>{
        console.log("Height:",ht,"weight:",wt);
         //weight in kgs
        if(ht<=0){
            alert("Please enter valid height");
            return;
        }

        
        var h2=ht/100;  //height in cms converted to m
        var c =(wt/(h2)**2).toFixed(2);
        
        setans(c);

        if(ans<=18.5){
            setImage(underweight);
        }
        
        else if(ans>18.5 && ans<=24.5 ){
            setImage(normalweight);
        }
        else if(ans>24.5 && ans<=50){
           setImage(overweight);
        }
        else if(ans>50 && ans<100){
            setImage(obese);
        }
        else{
            setImage(null);
        }
    }
    
    return(
        
        <>
        <div>BMI Calculator
            <form>
                <input type="number"  onChange={(e)=>setwt(parseFloat(e.target.value))} placeholder="Enter weight"/>
                <input type="number"  onChange={(e)=>setht(parseFloat(e.target.value))} placeholder="Enter height"/>
                <input type="button" value="Check" onClick={predictor}/>
                <h3>{ans}</h3>
            </form>
            {/* Displaying image dymanically */}
            {image && <img src={image} alt="BMI calculator"/>}
        </div>
        </>

        
    )
}
export default Practice4