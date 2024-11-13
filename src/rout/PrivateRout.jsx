import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user,loding}=useContext(AuthContext)
    if(loding){
         return <span className="loading loading-infinity loading-sm"></span>

    }
if(user){
    return children;
}
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRout;