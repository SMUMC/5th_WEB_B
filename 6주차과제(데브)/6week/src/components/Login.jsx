import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/user';

function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => {
        dispatch(login({name: "내 이름", age: 20, email: "email@gmail.com"}))
      }}>Login</button>
      <button onClick={() => {
        dispatch(logout())
      }}>Logout</button>
    </div>
  );
}

export default Login