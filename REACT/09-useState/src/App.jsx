import React, {useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1)
  }
function decreaseNum() {
    setNum(num-1)
}
  function jump5Num(){
    setNum(num+5)
  }
  
  return (
    <div>
      <h1>{num}</h1>
      {/* <button onClick={()=> setNum(num+1)}>Increase</button>
      <button onClick={()=> setNum(num-1)}>Decrease</button> */}
      <button onClick={increaseNum}>Decrease</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>increase 5</button>
    </div>
  )
}

export default App