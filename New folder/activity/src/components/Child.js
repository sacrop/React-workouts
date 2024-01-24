import React, { useState } from 'react'

 const Child = (props) => {
  const [val,setVal]=useState(0);
  return (
    <div>
      <h1>child</h1>
      <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}></input>
      <button className='btn' onClick={()=>props.update(val)}>submit </button>
    </div>
  )
}
export default Child;