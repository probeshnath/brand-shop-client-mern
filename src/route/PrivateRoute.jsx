import React, { useContext } from 'react'
import {AuthContext} from "../Provider/Provider"
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    console.log("first", user)

    if(user){
        return children;
    }

  return <Navigate to="/login" replace />
}

export default PrivateRoute