import React,{useRef,useEffect, useState} from 'react'

 const NewForm = () => {
    const [name,setName]=useState("");
    const refer=useRef();
    const renderCount=useRef(1);

    const focusIt=()=>{
        refer.current.focus();
    }

    useEffect(()=>{
        renderCount.current=renderCount.current+1;
        console.log(renderCount);
    });


  return (
    <div>
        <input value={name} ref={refer} onClick={focusIt} onChange={(e)=>setName(e.target.value)} />
        <h2>render count is {renderCount.current}</h2>
    </div>
  )
}
export default NewForm;