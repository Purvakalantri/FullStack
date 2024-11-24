import React, { useState } from "react";
//degree fo farenhite
function Practice3(){
    const[d,setdeg]=useState(0)
    const[c,setfar]=useState(0)
    const d2f=()=>{
       
        var answer=d*33.08;
        setfar(answer)

    }
    
    return(
        <>
        <div>Farhenheit
            <form>
                <input type="number" onChange={(e)=>setdeg(parseFloat(e.target.value))} placeholder="Enter degree"/>
                <input type="button" value="convert" onClick={d2f}/>
                <div>{c}</div>
            </form>
        </div>
        </>
    )
}
export default Practice3
