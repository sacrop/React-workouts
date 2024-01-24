import React,{useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    const refer1=useRef();
    const refer2=useRef();
    const refer3=useRef();
    const refer4=useRef();
    const highlight=(refer)=>{
        resetHighligh();
        refer.current.focus();
        refer.current.style.fontSize = 'larger';
        refer.current.style.outline = '2px solid #ff0000';
        
    }
    const resetHighligh=()=>{
        refer1.current.style.fontSize = "";
        refer1.current.style.outline = "";
        refer2.current.style.fontSize = "";
        refer2.current.style.outline = "";
        refer3.current.style.fontSize = "";
        refer3.current.style.outline = "";
        refer4.current.style.fontSize = "";
        refer4.current.style.outline = "";

    }
    

    return (
        <>
            <nav className="navbar bg-dark navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link ref={refer1} onClick={()=>highlight(refer1)} className="nav-link " to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link ref={refer2} onClick={()=>highlight(refer2)} className="nav-link " to='/about' >about</Link>
                            </li>
                            <li className="nav-item">
                                <Link ref={refer3} onClick={()=>highlight(refer3)} className="nav-link " to='/login' >login</Link>
                            </li>
                            <li className="nav-item">
                                <Link ref={refer4} onClick={()=>highlight(refer4)} className="nav-link " to='/contact' >Contact us</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
