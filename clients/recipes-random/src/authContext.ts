import React, { createContext, useState } from 'react'


const AuthContext = createContext({
    authenticated: false,
    setAuthenticated: (authenticated:boolean) => { }
});

export default AuthContext;