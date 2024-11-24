
import React, {useState}from "react";
//km to miles
function Practice1() {
    const[k,setkms]=useState(0);
    const[c,updatedc]=useState(0);

    const k2m = () => {
     
      var answer = k * 0.6;
      updatedc(answer)
    
    
  };

  return (
    <>
      <div>
        Miles
        <form>
          <input type="text" onChange={(e)=>setkms(parseFloat(e.target.value))} placeholder="Enter value in kms:" />
          <input type="button" value="convert" onClick={k2m} />
          <div>{c}</div>
        </form>
      </div>
    </>
  );
}
export default Practice1;
