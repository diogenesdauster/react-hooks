import React,{ useState, useEffect } from "react";

function Counter(){
  const [count,setCount] = useState(0)

  useEffect(()=>{
    document.title = `You clicked ${count} times`;
  })

  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={()=> setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default Counter
