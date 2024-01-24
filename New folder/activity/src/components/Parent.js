import React, { useState } from 'react'
import Child from './Child';
 const Parent = () => {
  const [data,setDate]=useState(0);
  const updateData=(value)=>{
    setDate(value);
  }
  return (
    <div>
      <h1>hi</h1>
      <h1>{data}</h1>
        <Child update={updateData}/>
    </div>
  )
}
export default Parent;