import React, { useState } from 'react'

function NewCounter() {
    const [count, setCount] = useState(0)
const [previousClick, setPreviousClick] =useState(0)

    const inputChange=(e)=>{
        setPreviousClick(Number(e.target.value))
    }
    const increaseCount =()=>{
        setCount(count+1)
    }
  return (
    <div>
        <labels> PreviousClicks :
        <input  onChange ={inputChange} type="text" value={previousClick}></input>
        </labels>
        <p>You clicked {previousClick + count} times</p>
        <button onClick={increaseCount}>Click me!</button>
    </div>
  )
}

export default NewCounter