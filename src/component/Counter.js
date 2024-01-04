import { useEffect, useState } from "react";

function Counter() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("hell")
    useEffect(()=>{
        console.log("hello effect")
    },[name])
  return (
    <div className="c">
        <input value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={()=>setCount((s)=>s+1)}>
    click {count}
  </button>
    </div>
  );
}

export default Counter;