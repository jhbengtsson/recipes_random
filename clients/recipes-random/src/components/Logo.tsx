import React from "react";
import '../custom.css'
import logo from '../images/logo_wo_text.png'
const Logo = () => {
    return(
        <>
            <img className='logo' src={logo} alt="logo"></img>
            <h1 className="logo-text">{'recipes-random'}</h1>
        </>
    )
}
export default Logo;