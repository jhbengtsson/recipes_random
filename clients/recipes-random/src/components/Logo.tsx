import React from "react";
import '../custom.css'
import logo from '../images/logo_wo_text.png'
import { Outlet, useNavigate } from 'react-router-dom'


const Logo = () => {
    const navigate = useNavigate()

    return(
        <>
            <img onClick={() => navigate("/recipe")} className='logo' src={logo} alt="logo"></img>
            <h1 className="logo-text">{'recipes-random'}</h1>
            <Outlet/>
        </>
    )
}
export default Logo;