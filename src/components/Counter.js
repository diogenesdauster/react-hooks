import React,{ useState, useEffect } from "react";

function Counter(){
  const aCounter = useCount(0)

  return (
    <div>
      <p>You click {aCounter[0]} times</p>
      <button onClick={aCounter[1]}>Click Me</button>
    </div>
  )
}

function useCount(props){
  const [count,setCount] = useState(props)

  useEffect(()=>{
    document.title = `You clicked ${count} times`;
  })

  function countOne(){
    setCount(count+1)
  }

  return [count,countOne]

}

export default Counter
