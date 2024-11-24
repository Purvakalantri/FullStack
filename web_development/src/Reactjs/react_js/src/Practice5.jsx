import React, { useState } from "react";


//Simple intrest\

function Practice5(){
    const[p,getp]=useState(0);
    const[n,getn]=useState(0);
    const[r,getr]=useState(0);
    const[ans,getans]=useState(0);
    
    const Simple_Intrest=()=>{
        var SI=0;
        SI=(p*n*r)/100;
        getans(SI);
    }
    
    return(
        <>
        <div>Simple Intrest
            <form>
                <input type="number" onChange={(e)=>getp(parseFloat(e.target.value))} placeholder="Enter p"/>
                <input type="number" onChange={(e)=>getn(parseFloat(e.target.value))} placeholder="Enter n"/>
                <input type="number" onChange={(e)=>getr(parseFloat(e.target.value))} placeholder="Enter r"/>
                <input type="button" value="Calculate" onClick={Simple_Intrest}/>

                <div>{ans}</div>
            </form>
            
        </div>
        </>
    )
}
export default Practice5