import React, { useEffect, useState } from 'react'
let flag=0;
 const Home = () => {
    
    const [val,setVal]=useState("home Page");
    const changeName=()=>{
        if(flag==0){
            setVal("result page");
            flag=1;
        }
        else{
            setVal("home Page");
            console.log(flag);
            flag=0;
        }
        
    }
    
  return (
    <div>
        <div>
            <h1>{val}</h1>
            <button className='btn' onClick={changeName}> change page</button>
        </div>
    </div>
  )
}
export default Home;
