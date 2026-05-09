
import React, { useState } from "react";
export default function Counter() {
  
   const [count,setCount]=useState(0);
  
  return (
    <div style={{padding:"20px",border:"solid black ",color:"white", backgroundColor:"black"}}>
      <h1>Cointer details: {count} </h1>
      <button onClick={()=>setCount(count+1)}>✅ Add item</button>
      <button onClick={()=>setCount(count-1)}>✅ remove item</button>
      <button onClick={()=>setCount(0)}>✅ reset item</button>
    </div>
  )
}
