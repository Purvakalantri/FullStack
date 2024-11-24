import React, { useState } from "react";
//kgs to pounds

function Practice2(){
    const[k,setkg]=useState(0);
    const[c,setpounds]=useState(0);
    
    const k2p=()=>{
        
        var answer=k*2.205;
        setpounds(answer)
    }
    
    return(
        <>
        <div>Pounds
            <form>
                <input type="number" onChange={(e)=>setkg(parseFloat(e.target.value))} placeholder="Enter weight in kgs:"/>
                <input type="button" value="Convert" onClick={k2p}/>
                <div>{c}</div>
            </form>
        </div>
        </>
    )
}
export default Practice2
