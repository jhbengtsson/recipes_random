import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../authContext'
import '../custom.css'

const LoginPage = () => {
    
    const {authenticated, setAuthenticated} = useContext(AuthContext)

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    useEffect(() => {
        console.log("EMAIL: " + email)
        console.log("PASSWORD: " + password)

    }, [email, password])

    function login(){
        const url =
            window.location.protocol +
            '//' +
            window.location.hostname +
            ':3001';

        fetch(url + "/api/login", {
            headers: {
                "content-type":"application/json",
            },
            referrerPolicy: 'strict-origin-when-cross-origin',
            body: JSON.stringify({email: email, password: password}),
            method: 'POST',
        })
            .then((response) => {
                if(response.status === 200){
                    setAuthenticated(true)
                }
                else{
                    setAuthenticated(false)
                }
            })
            .catch((error) => {    
                setAuthenticated(false)
            });

        //
    }

    return(
        <div className="login-page-container">
            <label htmlFor='email-input'> Email </label>
            <input 
                placeholder='email'
                id="email-input"
                type={"email"}    
                onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor='password-input'> Password</label>
            <input 
                placeholder='********'
                id="password-input"
                type={'password'}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button
                onClick={() => login()}
            >
                Login
            </button>
        </div>
    )
}

export default LoginPage