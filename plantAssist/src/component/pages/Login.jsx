import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
// import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

let navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault();
  const data = {
    email,
    password,
  };
  console.log(data);

  // useEffect(() => {
  fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",      
    },
  })
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    if(json.success){
      //if response success = true
      sessionStorage.setItem('authenticated', json.success);
      sessionStorage.setItem('id', json.data[0].id);
      navigate('/profile')
    }else{
      alert("Wrong username/password."); // error conditional statement down below wasn't working, so added alert
      setError(json.message)
    }
  }) 
  // });
  
  
};

  return (
    <>

      <div className="container">
        
        <form onSubmit={handleSubmit}>
          <div className="auth-form-container">
            <div className="header"><h2>Login</h2></div>

            <label htmlFor="email">email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@email.com"
              id="email"
              name="email"
            />
            <div className="pass">
              <label htmlFor="password">password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password"
              />
              {/* {error ? (<div>{error}</div>) : null} */}
              <div className="btn-login">
              
                <button><b>Login</b></button>
              
              </div>
            </div>
          </div>

          <div className="auth-form-link">
            <Link to="/register">
              <button><b>Sign Up for Free!</b></button>
            </Link>
          </div>
          
        </form>
      </div>
      
    </>
  );
};

export default Login;
