import React, { useEffect, useState } from 'react'
import './Bios.css'
const Bios = () => {
    
    const bioData=[
        {
            id:0,name:"adarsh",age:12
        },{
            id:1,name:"jishnu",age:12
        },{
            id:2,name:"navneeth",age:12
        },{
            id:3,name:"pooja",age:12
        }
    ];
    const [myArray,setMyArray]=useState(bioData);

    const emptyArray=()=>{
        setMyArray([]);
    }
    useEffect(()=>alert("clicked"));
    

  return (
  <div>
    <div className="container">

    </div>
    {
        myArray.map((elem)=>{ return <h1 key={elem.id}>name:{elem.name},age:{elem.age}</h1>})
    }
    <div>
        <button id="btn" onClick={emptyArray}>clear</button>
    </div>
  </div>
  )
}
export default Bios;