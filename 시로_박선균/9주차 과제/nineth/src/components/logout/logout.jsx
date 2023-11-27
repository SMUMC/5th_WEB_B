import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from '../redux/loginSlice';

function LogoutPage(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(logout())
        localStorage.removeItem('token');
        navigate('/')
    },[])


}
export default LogoutPage;