import React, { useState,useRef } from 'react'

const Form = () => {
    const [value, setValue] = useState({ names: "",email:"", age: "", phoneNumber:"" })

    const foc=useRef();

    const changeField = (name) => {
        return ((e) => { setValue({ ...value, [name]: e.target.value }) })
    }
    const focusField=()=>{
        foc.current.focus();
    }

    return (
        <div className="box">
            <div>
                <form className='forms'>
                <div className="mb-3">
                        <label className="form-label">name</label>
                        <input type="text" ref={foc} onClick={focusField} value={value.names} onChange={changeField("names")} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" value={value.email} onChange={changeField("email")} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">age</label>
                        <input type="number" value={value.age} onChange={changeField("age")} className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">phoneNumber</label>
                        <input type="number" value={value.phoneNumber} onChange={changeField("phoneNumber")} className="form-control" />
                    </div>

                    <button type="submit"  className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Form;
