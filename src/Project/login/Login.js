import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { NavLink } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate(); 

  const [logindata, setlogindata] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    console.log('Login Logic:', logindata);
      e.preventDefault()
  axios.post('https://page-node.onrender.com/api/login',logindata)
  .then((res)=>{alert(res.data.msg);
    localStorage.setItem("token",res.data.token)
    navigate('/');})
  .catch(err=>console.error(err))   
    
  };

  return (
    <div className='main'>
    <div  className='logins' style={{textAlign:'center'}}>
      <h1>Login Form</h1>
      <label>
        Email:
        <input className='inputField'
          type="text"
          value={logindata.email}
          onChange={(e) => setlogindata({ ...logindata, email: e.target.value })}
        />
      </label>
      <br />
      <label>
        Password:
        <input className='inputField'
          type="password"
          value={logindata.password}
          onChange={(e) => setlogindata({ ...logindata, password: e.target.value })}
        />
      </label>
      <br />
      <button className='down button1' onClick={handleLogin}>Login</button>
      <br />
      <p>
          Create an account? <NavLink to='/register'>Register here</NavLink>.
        </p>
    </div>
    <div className='quote'>
   Lets Shopping!!!
    </div>
    </div>
  );
};

export default Login;
